import{css,html,PageViewElement,SharedStyles}from"./my-app.js";class AppIndex extends PageViewElement{static get styles(){return[SharedStyles,css`
        header {
          display: flex;
          justify-content: space-between;
          padding: 20px 24px;
        }

        a + a {
          margin-left: 20px;
          display: inline-block;
        }
      `]}render(){return html`
      <app-header></app-header>
      <section>
        WELCOME
      </section>
    `}}window.customElements.define("app-index",AppIndex);