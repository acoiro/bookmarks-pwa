import{html,PageViewElement,SharedStyles}from"./my-app.js";class AppSignUp extends PageViewElement{static get styles(){return[SharedStyles]}render(){return html`
      <section>
        <h2>Sign up</h2>
      </section>
    `}}window.customElements.define("app-signup",AppSignUp);