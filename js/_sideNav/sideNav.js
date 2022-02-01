const sideNavTemplate = document.createElement('template');

sideNavTemplate.innerHTML = ` <aside class="feather">
<nav class="side-nav p-8">
  <div class="mb-8">
    <h2 class="side-nav-title">Components</h2>
  </div>
  <ul class="side-nav-items">
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/alerts/alerts.html">Alerts</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/avatars/avatars.html">Avatar</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/badges/badges.html">Badge</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/buttons/buttons.html">Button</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/card/card.html">Card</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/image/image.html">Image</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/form/form.html">Form</a>
    </li>
  </ul>
</nav>
</aside>`;


class SideNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = sideNavTemplate.innerHTML;
  }
}

customElements.define('side-nav-component', SideNav);
