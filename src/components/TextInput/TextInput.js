import React from "react";
import PropTypes from "prop-types";

import "@department-of-veterans-affairs/web-components/dist/esm/va-text-input.entry";

function TextInput(props) {
  // @ts-ignore
  return <va-text-input {...props} />;
}

TextInput.propTypes = {
  /**
   * The label for the text input.
   */
  label: PropTypes.string,
  /**
   * The error message to render.
   */
  error: PropTypes.string,
  /**
   * Whether or not `aria-invalid` will be set on the inner input. Useful when
   * composing the component into something larger, like a date component.
   */
  invalid: PropTypes.bool,

  /**
   * Set the input to required and render the (Required) text.
   */
  required: PropTypes.bool,
  /**
   * The inputmode attribute.
   */
  inputmode: PropTypes.oneOf(["decimal", "email", "numeric", "search", "tel", "text", "url"]),
  /**
   * The type attribute.
   */
  type: PropTypes.oneOf(["email", "numeric", "search", "tel", "text", "url"]),
  /**
   * The maximum number of characters allowed in the input.
   * Negative and zero values will be ignored.
   */
  maxlength: PropTypes.number,

  /**
   * The minimum number of characters allowed in the input.
   */
  minlength: PropTypes.number,

  /**
   * Allows the browser to automatically complete the input.
   */
  autocomplete: PropTypes.string,

  /**
   * Emit component-library-analytics events on the blur event.
   */
  enableAnalytics: PropTypes.bool,

  /**
   * The name to pass to the input element.
   */
  name: PropTypes.string,

  /**
   * The regular expression that the input element's value is checked against on submission
   */
  pattern: PropTypes.string,

  /**
   * Optional hint text.
   */
  hint: PropTypes.string,

  /**
   * An optional message that will be read by screen readers when the input is focused.
   */
  messageAriaDescribedby: PropTypes.string,

  /**
   * The value for the input.
   */
  value: PropTypes.string,

  /**
   * Adds styling based on status value
   */
  success: PropTypes.bool,

  /**
   * Whether or not the component will use USWDS v3 styling.
   */
  uswds: PropTypes.bool,
};

export default TextInput;
