class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    :host {
      display: block;
      width: 40%;
      background-color: black;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      position: relative;
      left: 400px;
      border-radius: 10px;
    }
    h2 {
      padding: 16px;
    }
    </style>

    <h2><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"/></h2>`;
  }
}

customElements.define("app-bar", AppBar);
