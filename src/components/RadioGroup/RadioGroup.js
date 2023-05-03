import React from "react";
import PropTypes from "prop-types";
import { checkForUSWDS } from "../../utilities/v3-hack";

function RadioGroup(props) {
  checkForUSWDS(props);
  return <va-radio {...props} />;
}

RadioGroup.propTypes = {
  /**
   * The text label for the radio group.
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional hint text.
   */
  hint: PropTypes.string,

  /**
   * Whether or not this input field is required.
   */
  required: PropTypes.bool,

  /**
   * A string with an error message.
   */
  error: PropTypes.string,

  /**
   * Whether or not an analytics event will be fired.
   */
  enableAnalytics: PropTypes.bool,

  /**
   * Whether or not the component will use USWDS v3 styling.
   */
  uswds: PropTypes.bool,

  /**
   * Insert a header with defined level inside the label (legend)
   */
  labelHeaderLevel: PropTypes.string,
};

export { RadioGroup as default };
