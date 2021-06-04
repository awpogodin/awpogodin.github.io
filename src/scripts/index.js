import "../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

const THEME_KEY = "light_mode";

const Storage = {
  getItem: (key) => localStorage.getItem(key),
  getBooleanItem: (key) =>
    localStorage.getItem(key) === "true" ? true : false,
  setItem: (key, value) => localStorage.setItem(key, value),
};

const getBtnIcon = (day) => day ? "☀️" : "🌒";

const init = () => {
  const btn = document.querySelector("#switch-theme");
  const elements = document.querySelectorAll("[th]");

  let isLightMode = false;

  const changeTheme = () => {
    elements.forEach((el) => {
      el.classList.toggle("themed");
    });
    isLightMode = !isLightMode;
    btn.innerHTML = getBtnIcon(isLightMode);
    Storage.setItem(THEME_KEY, isLightMode);
  };

  Storage.getBooleanItem(THEME_KEY) && changeTheme(); // dark mode is default
  btn.innerHTML = getBtnIcon(isLightMode);
  btn.addEventListener("click", changeTheme);
};

init();