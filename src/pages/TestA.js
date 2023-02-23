export default function TestA($id) {
  // typeof id : number

  this.init = () => {
    this.render();
  };

  this.render = () => {
    return `<h1>정규식 라우팅 테스트 페이지 - ${$id}</h1>`;
  };
}
