const sideNavTemplate = document.createElement('template');

sideNavTemplate.innerHTML = ` <aside class="feather">
<nav class="side-nav p-8">
  <div class="mb-8">
    <h3 class="side-nav-title">Components</h3>
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
      <a href="/components/cards/cards.html">Card</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/images/images.html">Image</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/forms/forms.html">Form</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/lists/lists.html">Lists</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/navigation/navigation.html">Navigation</a>
    </li>
    <li class="side-nav-item mb-8 text-xl font-semibold">
      <a href="/components/modals/modals.html">Modals</a>
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
