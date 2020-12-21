// mysql 모듈 포함
const mysql = require("mysql");

// mysql 연결을 위한 인스턴스 생성
const db = mysql.createConnection({
  host: "database-1.cpgc5gfatdp6.ap-northeast-2.rds.amazonaws.com", // DB 서버 호스트
  user: "root", // 지정한 유저 아이디
  password: "password", //  지정한 패스워드
  database: "woowahan", // 데이터 베이스 이름
});

db.connect();

module.exports = db;
