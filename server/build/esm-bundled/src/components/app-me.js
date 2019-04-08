import{html,PageViewElement,SharedStyles}from"./my-app.js";class AppAccount extends PageViewElement{static get styles(){return[SharedStyles]}render(){return html`
      <section>
        <h2>Search</h2>
      </section>
    `}}window.customElements.define("app-me",AppAccount);