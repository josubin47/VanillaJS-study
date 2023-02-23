export default function Component() {
  this.init = () => {
    this.render();
    this.setEvent();
  };

  this.render = () => {
    return ``;
  };

  this.setEvent = (e) => {
    dispatchEvent(e);
  };

  // ! 이벤트 해제 함수
  // this.closeEvent () => {}
}
const component = new Component();
component.init();
