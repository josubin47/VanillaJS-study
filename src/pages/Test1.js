import api from "../core/api.js";

export default function Test1() {
  this.init = () => {};

  this.setData = async () => {
    const data = await api.getList();
    console.log(data);
  };

  this.render = () => {
    this.setData();
    return `<h1>테스트 1번 페이지</h1>`;
  };
}
