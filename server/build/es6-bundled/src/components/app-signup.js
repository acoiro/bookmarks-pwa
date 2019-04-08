define(["./my-app.js"],function(_myApp){"use strict";class AppSignUp extends _myApp.PageViewElement{static get styles(){return[_myApp.SharedStyles]}render(){return _myApp.html`
      <section>
        <h2>Sign up</h2>
      </section>
    `}}window.customElements.define("app-signup",AppSignUp)});