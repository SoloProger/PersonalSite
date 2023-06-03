import navbar from "./navbar.js";
import contacts from "./contacts.js";
import modal from "./modal.js";
import about from "./about.js";
import portfolio from "./portfolio.js";

const themeSwitch = document.querySelector("input[name=theme]");

const test = state("switch", "", "get");
if (test) themeSwitch.checked = test;

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    state("path", "dark");
    state("switch", true);
    changeTheme();
  } else {
    state("", "", "clear");
    changeTheme();
  }
});

function __init__() {
  navbar();
  contacts();
  modal();
  about();
  portfolio();
  changeTheme();
}

__init__();

function changeTheme() {
  const head = document.querySelector("head");
  const link = document.createElement("link");

  const path = state("path", "", "get");

  link.rel = "stylesheet";
  link.type = "text/css";
  if (!path) {
    link.href = `../styles/themes/light/index.css`;
  } else {
    link.href = `../styles/themes/${path}/index.css`;
  }

  head.appendChild(link);
}

function state(key, value, method = "set") {
  switch (method) {
    case "set":
      localStorage.setItem(key, value);
      break;
    case "get":
      return localStorage.getItem(key);
    case "clear":
      localStorage.clear();
      break;
  }
}
