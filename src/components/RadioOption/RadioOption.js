import React from "react";
import PropTypes from "prop-types";
import { checkForUSWDS } from "../../utilities/v3-hack";

function RadioOption(props) {
  checkForUSWDS(props);
  return <va-radio-option {...props} />;
}

RadioOption.propTypes = {
  /**
   * The name attribute for the input element.
   */
  name: PropTypes.string.isRequired,

  /**
   * The text label for the input element.
   */
  label: PropTypes.string.isRequired,

  /**
   * The value attribute for the input element.
   */
  value: PropTypes.string.isRequired,

  /**
   * Whether or not the option is selected.
   */
  checked: PropTypes.bool,

  /**
   * Whether or not the component will use USWDS v3. styling.
   */
  uswds: PropTypes.bool,

  /**
   * Whether or not the component will display as a tile. Available when uswds is true.
   */
  tile: PropTypes.bool,

  /**
   * Description of the option displayed below the option label. Available when uswds is true.
   */
  description: PropTypes.string,

  /**
   * Whether or not the radio option is disabled. Can be used if the USWDS option is active.
   */
  disabled: PropTypes.bool,

  /**
   * Optional string for the ariaDescribedBy attribute.
   */
  ariaDescribedby: PropTypes.string,
};

export { RadioOption as default };
