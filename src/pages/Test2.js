import Router from "../core/router.js";

export default function Test2() {
  const { navigate } = new Router();

  this.$data = [123, 124, 678];

  this.init = () => {
    setEvent();
  };

  this.render = () => {
    return `<h1>테스트 2번 페이지</h1>
            <nav class="nav" id="test-nav">
                ${this.$data.map((item) => {
                  return `<a href="/test/${item}" class="nav__link" data-a-id=${item} data-link>Test ${item}</a>`;
                })}
            </nav>`;
  };

  const setEvent = () => {
    document.querySelector("#test-nav")?.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigate(e.target.href, e.target.dataset.aId);
      }
    });
  };
}
