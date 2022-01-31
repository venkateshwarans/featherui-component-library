const TopSideNavTemplate = document.createElement('template');

TopSideNavTemplate.innerHTML = ` <aside class="feather">
<nav class="side-nav p-8">
  <div class="mb-8">
    <h2 class="side-nav-title">Get started</h2>
  </div>
  <ul class="side-nav-items">
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/alerts/alerts.html">Usage</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/avatars/avatars.html">Colors</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/badge/badge.html">Typography</a>
    </li>
  </ul>
</nav>
</aside>`;


class TopSideNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = TopSideNavTemplate.innerHTML;
  }
}

customElements.define('top-side-nav-component', TopSideNav);
