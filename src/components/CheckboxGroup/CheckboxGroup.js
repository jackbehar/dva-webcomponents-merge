import React from "react";
import PropTypes from "prop-types";

import "@department-of-veterans-affairs/web-components/dist/esm-es5/va-checkbox-group.entry";
import "@department-of-veterans-affairs/web-components/dist/esm-es5/va-checkbox.entry";

function CheckboxGroup(props) {
  return (
    <va-checkbox-group {...props}>
      <va-checkbox label="Test Checkbox" />
    </va-checkbox-group>
  );
}

CheckboxGroup.propTypes = {
  /**
   * The text label for the checkbox group.
   */
  label: PropTypes.string.isRequired,

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
   * Optional hint text.
   */
  hint: PropTypes.string,

  /**
   * Whether or not the component will use USWDS v3 styling.
   */
  uswds: PropTypes.bool,
};

export { CheckboxGroup as default };
