// eslint-disable-next-line no-unused-vars
import React from "react";
import { defineCustomElements } from "@department-of-veterans-affairs/component-library/";
import "./styles.scss"

export default function UXPinWrapper({ children }) {
  defineCustomElements();

  return <div className="dva">{children}</div>;
}
