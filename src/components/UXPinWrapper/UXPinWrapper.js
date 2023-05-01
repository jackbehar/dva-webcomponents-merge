// eslint-disable-next-line no-unused-vars
import React from "react";
import { defineCustomElements } from "@department-of-veterans-affairs/component-library/";
import "./App.scss"

if (!document.getElementById("fontAwesome")) {
  let fontAwesome = document.createElement("link");
  fontAwesome.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css");
  fontAwesome.setAttribute("rel", "stylesheet");
  fontAwesome.setAttribute("id", "fontAwesome");
  document.head.appendChild(fontAwesome);
}

if (!document.getElementById("sourceSansProFont")) {
  let sourceSans = document.createElement("link");
  sourceSans.setAttribute("href", "https://cdn.jsdelivr.net/npm/source-sans-pro@3.6.0/source-sans-pro.min.css");
  sourceSans.setAttribute("rel", "stylesheet");
  sourceSans.setAttribute("id", "sourceSansProFont");
  document.head.appendChild(sourceSans);
}
    

export default function UXPinWrapper({ children }) {
  defineCustomElements();

  return children;
}
