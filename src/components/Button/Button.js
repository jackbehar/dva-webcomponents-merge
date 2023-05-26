import React from "react";
import PropTypes from "prop-types";
import "./styles.scss"

function Button(props) {
  return <><va-button {...props} /></>
}

Button.propTypes = {
  /**
   * The text displayed on the button. If continue or back is true, the value of text is ignored
   */
  text: PropTypes.string,
  /**
   * If true, the button will use Continue as its text and an icon to represent proceeding forward in form flows.
   */
  continue: PropTypes.bool,
  /**
   * If true, the button will use Back as its text and an icon to represent going back in form flows.
   */
  back: PropTypes.bool,
  /**
   * If true, the button will use the big variant.
   */
  big: PropTypes.bool,
  /**
   * If true, the click event will not fire.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the button will use the secondary variant.
   */
  secondary: PropTypes.bool,
  /**
   * If true, the button will submit form data when clicked.
   */
  submit: PropTypes.bool,

  uswds: PropTypes.bool,
};

export { Button as default };
