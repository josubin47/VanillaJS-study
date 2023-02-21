export default function Home() {
  this.render = () => {
    return `
    <h1>연습용 메인 페이지</h1>

    <p>My first paragraph.</p>
    <nav class="nav">
        <a href="/" class="nav__link" data-link>Home</a>
        <a href="/test1" class="nav__link" data-link>Test 1</a>
    </nav>`;
  };
}
