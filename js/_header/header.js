const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header class="feather mt-8 flex px-8">
  <div>
    <a href="/" class="logo text-3xl font-black flex flex-items-center">
    <svg width="80" height="80" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
      <path fill="#c1f79a"
        d="M42.334 49.147a29.945 29.945 0 0 1-19.338-8.151c-8.014-7.365-8.378-18.076-8.533-22.649l-.022-.627a2.904 2.904 0 0 1 3.457-2.951c17.005 3.355 21.695 16.324 22.056 17.4a49.543 49.543 0 0 1 3.574 15.922 1 1 0 0 1-.967 1.052c-.029.001-.106.004-.227.004Z" />
      <path fill="#45C14E"
        d="M44.435 55.316c-11.645 0-17.375-6.974-17.652-7.354a1 1 0 0 1 .262-1.424 11.103 11.103 0 0 1 12.774-1.574c-1.465-9.078 1.877-13.568 2.031-13.77a.998.998 0 0 1 .75-.39.97.97 0 0 1 .78.325c8.944 9.771 8.793 16.532 7.908 19.691-.034.14-1.062 4.092-4.772 4.406-.711.062-1.405.09-2.08.09Z" />
      <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M55.184 57.69S34.96 45.877 23.097 24.206m22.131 30.096c-11.93.46-17.628-6.88-17.628-6.88" />
        <path
          d="M40.528 42.483c-.56-7.195 2.116-10.679 2.116-10.679 8.834 9.654 8.406 16.162 7.681 18.747m-13.311-3.129a30.15 30.15 0 0 1-13.341-7.162c-8.072-7.419-8.067-18.241-8.232-22.577a1.903 1.903 0 0 1 2.264-1.932C34.694 19.103 39.02 32.528 39.02 32.528" />
      </g>
    </svg>
    Feather UI </a>
  </div>
  <nav class="flex flex-items-center">
    <ul class="inline-flex">
      <li class="text-lg font-black"><a class="text-decoration-none" href="/index.html">Home</a>
      </li>
      <li class="text-lg font-black"><a class="text-decoration-none" href="/components/alerts/alerts.html">Documentation</a>
      </li>
      <li class="text-lg font-black"><a class="text-decoration-none" href="https://github.com/venkateshwarans/featherui-component-library">Github</a>
      </li>
    </ul>
  </nav>
</header>`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = headerTemplate.innerHTML;
  }
}

customElements.define('header-component', Header);
