// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  applyPolyfills,
  defineCustomElements,
} from "@department-of-veterans-affairs/component-library/";

export default function UXPinWrapper({ children }) {
  applyPolyfills().then(() => {
    defineCustomElements();
  });  
  return children;
}
