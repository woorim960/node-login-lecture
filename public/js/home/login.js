"use strict";

const id = document.querySelector("#id"),
  passwd = document.querySelector("#passwd"),
  btnLogin = document.querySelector("button");

const init = () => {
  btnLogin.addEventListener("click", login);
};

const login = () => {
  const req = {
    id: id.value,
    passwd: passwd.value,
  };

  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  };

  requestLogin(post);
};

const requestLogin = (post) => {
  fetch("/login", post)
    .then((res) => res.json())
    .then((res) => {
      processResponse(res);
    })
    .catch((err) => {
      throw err;
    });
};

const processResponse = (res) => {
  if (res.isSuccess) {
    location.href = "/";
    alert("로그인에 성공하셨습니다.");
    return;
  }
  alert("로그인에 실패하셨습니다.");
};

init();
