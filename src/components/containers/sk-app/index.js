
import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/app-layout/app-header-layout/app-header-layout';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout';
import '@polymer/app-layout/app-toolbar/app-toolbar';

import css from './style.pcss';
import template from './template.html';

export default class SkApp extends PolymerElement {

  static get properties() {
    return {
      name: {
        type: String
      },
      appVersion: {
        type: String,
        value: process.env.appVersion
      },
      ENV: {
        type: String,
        value: process.env.NODE_ENV
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }
}

window.customElements.define('sk-app', SkApp);
