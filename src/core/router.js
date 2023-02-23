import Test1 from "../pages/Test1.js";
import Home from "../pages/Home.js";
import Test2 from "../pages/Test2.js";
import TestA from "../pages/TestA.js";

export default function Router() {
  // url 정보
  const routes = [
    { path: /^\/$/, view: Home },
    { path: /\/test1/, view: Test1 },
    { path: /\/test2/, view: Test2 },
    { path: /^\/test\/(\d+)$/, view: TestA },
  ];

  this.currentPage = "/";

  this.$historyStack = [];

  this.init = () => {
    this.navigate(this.currentPage);

    window.onpopstate = (e) => {
      this.navigate(location.href);
    };
  };

  // 뷰 랜더링
  this.render = (id) => {
    const $view = findMatchRoute().view;

    let app;

    if (id !== undefined) {
      app = new $view(id);
    } else {
      app = new $view();
    }

    document.querySelector("#app").innerHTML = app.render();

    app.init();
  };

  // 이동
  this.navigate = (url, id) => {
    history.pushState({ url: url }, "", url);
    this.currentPage = url;
    this.render(id);

    this.$historyStack.push(history.state);
  };

  // 현재 url과 맞는 url 정보 찾기
  const findMatchRoute = () => {
    return routes.find((route) => route.path.test(location.pathname));
  };
}
