export const checkForUSWDS = (props) => {
  console.log("props passed into check:", props);
  if ("uswds" in props) {
    console.log("uswds flag found");
    if (!!props["uswds"]) {
      const el = document.getElementsByTagName("html")[0];
      el.classList.add("v3-font-size");
    }
  } else {
    console.log("uswds flag NOT found");
  }
};
