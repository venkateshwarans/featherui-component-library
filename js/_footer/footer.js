const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `<footer>
</footer>


`;


class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footerTemplate.innerHTML;
  }
}

customElements.define('footer-component', Footer);
