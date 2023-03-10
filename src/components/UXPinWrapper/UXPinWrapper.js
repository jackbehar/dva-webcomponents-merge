// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  applyPolyfills,
  defineCustomElements,
} from "@department-of-veterans-affairs/component-library/";

const fontAwesome = document.createElement('link');
fontAwesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');
fontAwesome.setAttribute('rel', 'stylesheet');
document.head.appendChild(fontAwesome);

export default function UXPinWrapper({ children }) {
  applyPolyfills().then(() => {
    defineCustomElements();
  });
  
  return children;
}
