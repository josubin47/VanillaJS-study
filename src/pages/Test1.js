export default function Test1() {
  this.init = () => {
    this.render();
  };
  this.render = () => {
    return `<h1>테스트 1번 페이지</h1>`;
  };
}
