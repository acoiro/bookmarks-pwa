/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { css } from 'lit-element';
import './shared/app-header.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class AppPricing extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      css`
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
      `
    ];
  }

  render() {
    return html`
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
    `;
  }
}

window.customElements.define('app-pricing', AppPricing);
