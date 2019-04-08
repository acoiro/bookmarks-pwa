import{html,PageViewElement,SharedStyles}from"./my-app.js";class AppSignIn extends PageViewElement{static get styles(){return[SharedStyles]}render(){return html`
      <section>
        <h2>Sign in</h2>
      </section>
    `}}window.customElements.define("app-signin",AppSignIn);