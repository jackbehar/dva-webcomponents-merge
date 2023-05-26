import React from "react";
import PropTypes from "prop-types";

function MemorableDate(props) {
  return <va-memorable-date {...props} />;
}

MemorableDate.propTypes = {
  /**
   * Render marker indicating field is required.
   */
  required: PropTypes.bool,

  /**
   * Whether or not the component will use USWDS v3 styling.
   */
  uswds: PropTypes.bool,

  /**
   * Whether or not to use the month as an input or select.
   */
  monthSelect: PropTypes.bool,

  /**
   * Label for the field.
   */
  label: PropTypes.string.isRequired,

  /**
   * Used to create unique name attributes for each input.
   */
  name: PropTypes.string.isRequired,

  /**
   * Hint text string
   */
  hint: PropTypes.string,

  /**
   * The error message to render (if any)
   * This prop should be leveraged to display any custom validations needed for this component
   */
  error: PropTypes.string,

  /**
   * Set the default date value must be in YYYY-MM-DD format.
   */
  value: PropTypes.string,
};

export default MemorableDate;
