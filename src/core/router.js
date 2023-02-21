import Test1 from "../pages/Test1.js";
import Home from "../pages/Home.js";

export default function Router() {
  // url 정보
  const routes = [
    { path: /^\/$/, view: Home },
    { path: /\/test1/, view: Test1 },
    //  { path: "/test2", view: () => console.log("테스트2") },
    // { path: /^\/test\/(\d+)$/, view: () => console.log("") },
  ];

  // 뷰 랜더링
  this.render = () => {
    const $view = findMatchRoute().view;

    const app = new $view();
    document.querySelector("#app").innerHTML = app.render();
  };

  // 이동
  this.navigate = (url) => {
    history.pushState(null, "", url);
    this.render();
  };

  // 현재 url과 맞는 url 정보 찾기
  const findMatchRoute = () => {
    return routes.find((route) => route.path.test(location.pathname));
  };
}
