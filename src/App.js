import Router from "./core/router.js";

export default function App() {
  const { navigate, domain } = new Router();

  window.addEventListener("DOMContentLoaded", (e) => {
    // * 초기 로딩시엔 Home으로 보냄
    navigate("/");

    // * nav에 이벤트 위임
    // TODO : 링크 변경 감지로 변경
    document.querySelector(".nav")?.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigate(e.target.href);
      }
    });
  });
}

const app = new App();
