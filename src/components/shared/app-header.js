/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css, LitElement } from 'lit-element';

class AppHeader extends LitElement {
  static get styles() {
    return [
      css`
        header {
          display: flex;
          justify-content: space-between;
          padding: 20px 24px;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        a + a {
          margin-left: 24px;
          display: inline-block;
        }
      `
    ];
  }

  render() {
    return html`
      <header>
        <a href="/">Bookmarks</a>
        <nav>
          <a href="/pricing">Pricing</a>
          <a href="/signin">Sign in</a>
          <a href="/signup">Get started</a>
        </nav>
      </header>
    `;
  }
}

window.customElements.define('app-header', AppHeader);
