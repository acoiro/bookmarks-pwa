define(["./my-app.js"],function(_myApp){"use strict";class AppSignIn extends _myApp.PageViewElement{static get styles(){return[_myApp.SharedStyles]}render(){return _myApp.html`
      <section>
        <h2>Sign in</h2>
      </section>
    `}}window.customElements.define("app-signin",AppSignIn)});