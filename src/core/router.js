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

  this.initstate = "/";

  // 초기화
  this.init = () => {
    this.navigate(this.initstate);

    window.onpopstate = (e) => {
      this.navigate(location.href);
    };
  };

  //뷰 렌더링
  this.render = (id) => {
    const $view = findMatchRoute().view;
    const app = new $view(id ?? undefined);
    document.querySelector("#app").innerHTML = app.render();
    app.init();
  };

  // 이동
  this.navigate = (url, id) => {
    // 중복 스택 방지
    if (history.state.url === url) {
      // 현재 state와 바꾸려는 url이 같을 경우
      history.replaceState({ url: url }, "", url);
    } else {
      history.pushState({ url: url }, "", url);
    }

    this.render(id);
  };

  // 현재 url과 맞는 url 정보 찾기
  const findMatchRoute = () => {
    return routes.find((route) => route.path.test(location.pathname));
  };
}
