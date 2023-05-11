import React from "react";
import PropTypes from "prop-types";

function Checkbox(props) {
  return <va-checkbox {...props} />;
}

Checkbox.propTypes = {
  /**
   * The label for the checkbox.
   */
  label: PropTypes.string.isRequired,

  /**
   * The error message to render.
   */
  error: PropTypes.string,

  /**
   * The description to render. If this prop exists, va-checkbox will render it
   * instead of the named slot.
   */
  description: PropTypes.string,

  /**
   * Set the input to required and render the (Required) text.
   */
  required: PropTypes.bool,

  /**
   * True if the analytics event should fire.
   */
  enableAnalytics: PropTypes.bool,

  /**
   * Whether the checkbox is checked or not.
   *
   * Note: Because this isn't reflective, vaCheckbox.getAttribute('checked')
   * will not reflect the correct value. Use the property vaCheckbox.checked
   * instead.
   */
  checked: PropTypes.bool,

  /**
   * Optional hint text.
   */
  hint: PropTypes.string,

  /**
   * Whether or not the component will display as a tile. Available when uswds is true.
   */
  tile: PropTypes.bool,

  /**
   * Whether or not the component will use USWDS v3 styling.
   */
  uswds: PropTypes.bool,

  /**
   * Description of the option displayed below the checkbox label. Available when uswds is true.
   */
  checkboxDescription: PropTypes.string,

  /**
   * Whether or not the checkbox option is disabled. Available when uswds is true.
   */
  disabled: PropTypes.bool,
};

export { Checkbox as default };
