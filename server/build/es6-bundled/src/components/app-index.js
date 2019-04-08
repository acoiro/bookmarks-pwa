define(["./my-app.js"],function(_myApp){"use strict";class AppIndex extends _myApp.PageViewElement{static get styles(){return[_myApp.SharedStyles,_myApp.css`
        header {
          display: flex;
          justify-content: space-between;
          padding: 20px 24px;
        }

        a + a {
          margin-left: 20px;
          display: inline-block;
        }
      `]}render(){return _myApp.html`
      <app-header></app-header>
      <section>
        WELCOME
      </section>
    `}}window.customElements.define("app-index",AppIndex)});