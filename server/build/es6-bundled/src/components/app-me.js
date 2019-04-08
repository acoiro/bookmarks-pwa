define(["./my-app.js"],function(_myApp){"use strict";class AppAccount extends _myApp.PageViewElement{static get styles(){return[_myApp.SharedStyles]}render(){return _myApp.html`
      <section>
        <h2>Search</h2>
      </section>
    `}}window.customElements.define("app-me",AppAccount)});