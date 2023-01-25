import React from "react";
import PropTypes from "prop-types";

import "@department-of-veterans-affairs/web-components/dist/esm-es5/va-accordion.entry"

function Accordion(props) {
  return (
    <div>
      <va-accordion {...props}/>
    </div>
  );
}

Accordion.propTypes = {
  /**
 * @uxpinignoreprop
 */
  children: PropTypes.node,
  bordered: PropTypes.bool,
  'open-single': PropTypes.bool,
};

export { Accordion as default };
