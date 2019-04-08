define(["./my-app.js"],function(_myApp){"use strict";class AppPricing extends _myApp.PageViewElement{static get styles(){return[_myApp.SharedStyles,_myApp.css`
        .price {
          text-align: center;
        }

        .price .tag {
          font-size: 82px;
          font-weight: bold;
        }

        .price .frequency {
          font-size: 12px;
          opacity: 0.8;
        }
      `]}render(){return _myApp.html`
      <div>
        <app-header></app-header>
        <section>
          <h2>Pricing</h2>
          <div class="price">
            <div class="tag">$1</div>
            <div class="frequency">per month</div>
          </div>
        </section>
      </div>
    `}}window.customElements.define("app-pricing",AppPricing)});