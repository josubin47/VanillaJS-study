import Router from "./core/router.js";

export default function App() {
  const { navigate, init: routerInit } = new Router();

  this.init = () => {
    routerInit();

    // TODO : 링크 변경 감지로 변경
    document.querySelector(".nav")?.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigate(e.target.href);
      }
    });
  };
}

const app = new App();
app.init();
