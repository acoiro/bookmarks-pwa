define(["./my-app.js"],function(_myApp){"use strict";class MyView1 extends _myApp.PageViewElement{static get styles(){return[_myApp.SharedStyles]}render(){return _myApp.html`
      <section>
        <h2>Bookmarks</h2>
      </section>
    `}}window.customElements.define("my-view1",MyView1)});