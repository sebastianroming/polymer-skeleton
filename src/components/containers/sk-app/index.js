
import {Element as PolymerElement} from '@polymer/polymer/polymer-element';
import './../../dumbs/sk-menu';

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
    return `
      <style>${css}</style> ${template}`;
  }
}

window.customElements.define('sk-app', SkApp);