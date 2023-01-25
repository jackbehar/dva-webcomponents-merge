import React from "react";
import PropTypes from "prop-types";

import "@department-of-veterans-affairs/web-components/dist/esm-es5/va-accordion-item.entry"

function AccordionItem(props) {
  return (
      <va-accordion-item
        {...props}
      >
        {props.children}
      </va-accordion-item>
  );
}

AccordionItem.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  /**
  * The text displayed on the button. If continue or back is true, the value of text is ignored 
  */
  header: PropTypes.string,
  subheader: PropTypes.string,
  /**
  * If true, the button will use Continue as its text and an icon to represent proceeding forward in form flows. 
  */
  // level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  level: PropTypes.number,

  /**
  * If true, the button will use Back as its text and an icon to represent going back in form flows.
  */
  open: PropTypes.bool,


};

export { AccordionItem as default };
