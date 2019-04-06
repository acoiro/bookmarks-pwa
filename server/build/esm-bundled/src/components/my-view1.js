import{html,PageViewElement,SharedStyles}from"./my-app.js";class MyView1 extends PageViewElement{static get styles(){return[SharedStyles]}render(){return html`
      <section>
        <h2>Bookmarks</h2>
      </section>
    `}}window.customElements.define("my-view1",MyView1);