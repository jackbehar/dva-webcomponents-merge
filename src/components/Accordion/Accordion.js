import React from "react";
import PropTypes from "prop-types";

import "@department-of-veterans-affairs/web-components/dist/esm-es5/va-accordion.entry"

function Accordion(props) {
  return (
    <va-accordion {...props} />
  );
}

Accordion.propTypes = {
  /**
  * @uxpinignoreprop
  */
  children: PropTypes.node,

  /**
  * Whether or not the accordion items will have borders
  */
  bordered: PropTypes.bool,

  /**
  * True if only a single item can be opened at once
  */
  'open-single': PropTypes.bool,
};

export { Accordion as default };
