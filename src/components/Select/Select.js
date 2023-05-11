import React from "react";
import PropTypes from "prop-types";

function Select(props) {
  return <va-select {...props} />;
}

Select.propTypes = {
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Whether or not this is a required field.
   */
  required: PropTypes.bool,

  /**
   * Text label for the field.
   */
  label: PropTypes.string.isRequired,

  /**
   * Name attribute for the select field.
   */
  name: PropTypes.string.isRequired,

  /**
   * Selected value (will get updated on select).
   */
  value: PropTypes.string,

  /**
   * Error message to display. When defined, this indicates an error.
   */
  error: PropTypes.string,

  /**
   * Whether or not to add usa-input--error as class if error message is outside of component
   */
  reflectInputError: PropTypes.bool,

  /**
   * Whether or not `aria-invalid` will be set on the inner select. Useful when
   * composing the component into something larger, like a date component.
   */
  invalid: PropTypes.bool,

  /**
   * Whether or not to fire the analytics events
   */
  enableAnalytics: PropTypes.bool,

  /**
   * Whether or not the component will use USWDS v3 styling.
   */
  uswds: PropTypes.bool,

  /**
   * Optional hint text.
   */
  hint: PropTypes.string,
};

export { Select as default };
