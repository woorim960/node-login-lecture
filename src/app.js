const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();

// 앱 세팅
app.set("views", "./views"); // 뷰 엔진 폴더(views)의 기본 경로 세팅
app.set("view engine", "ejs"); // 뷰 엔진은 ejs 사용
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json()); // 클라이언트의 요청 데이터 중 json 객체를 파싱할 수 있게 하기 위함
app.use(bodyParser.urlencoded({ extended: true })); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결해준다.
app.use(logger("dev")); // 클라이언트의 요청 정보를 콘솔에 기록해준다.

// 라우팅 미들웨어
app.use("/", require("./routes/home"));

module.exports = app;
