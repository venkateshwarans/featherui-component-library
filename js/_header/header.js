const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header class="feather mt-8 flex px-8">
  <div>
    <a href="/" class="logo text-3xl font-black flex flex-items-center p-4">
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 44"><path d="M27.895 34.431a29.945 29.945 0 0 1-19.338-8.15C.543 18.914.179 8.203.024 3.63l-.022-.627A2.904 2.904 0 0 1 3.459.054c17.005 3.354 21.695 16.323 22.056 17.4a49.543 49.543 0 0 1 3.574 15.921 1 1 0 0 1-.967 1.052c-.03.001-.106.004-.227.004z" fill="#c1f79a"/><path d="M29.996 40.6c-11.645 0-17.375-6.974-17.652-7.354a1 1 0 0 1 .262-1.424 11.103 11.103 0 0 1 12.774-1.574c-1.465-9.078 1.877-13.568 2.03-13.77a.998.998 0 0 1 .75-.39.97.97 0 0 1 .78.325c8.945 9.771 8.794 16.532 7.909 19.691-.034.14-1.062 4.092-4.772 4.406-.711.062-1.405.09-2.08.09h-.001z" fill="#45C14E"/><g stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="#000" fill="none"><path d="M40.745 42.974S20.52 31.161 8.658 9.49m22.13 30.096c-11.93.46-17.627-6.88-17.627-6.88"/><path d="M26.089 27.767c-.56-7.195 2.116-10.679 2.116-10.679 8.834 9.654 8.406 16.162 7.68 18.747m-13.31-3.129a30.15 30.15 0 0 1-13.341-7.162C1.162 18.125 1.167 7.304 1.002 2.967a1.903 1.903 0 0 1 2.264-1.932C20.255 4.387 24.58 17.812 24.58 17.812"/></g></svg>
    Feather UI </a>
  </div>
  <nav class="flex flex-items-center">
    <ul class="inline-flex">
      <li class="text-xl font-black"><a class="text-decoration-none" href="/index.html"><i class="fas fa-home mr-2"></i> Home</a>
      </li>
      <li class="text-xl font-black"><a class="text-decoration-none" href="/pages/usage.html"><i class="fas fa-book mr-2"></i> Documentation</a>
      </li>
      <li class="text-xl font-black"><a class="text-decoration-none" href="https://github.com/venkateshwarans/featherui-component-library"><i class="fab fa-github mr-2"></i> Github</a>
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
