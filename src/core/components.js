export default function Component() {
  this.init = () => {
    this.template();
  };
  this.template = () => {
    return ``;
  };
}
const component = new Component();
component.init();
