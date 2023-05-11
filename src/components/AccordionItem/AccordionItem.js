import React from "react";
import PropTypes from "prop-types";
import { checkForUSWDS } from "../../utilities/v3-hack";

function AccordionItem(props) {
  checkForUSWDS(props);
  return <va-accordion-item {...props}>{props.children}</va-accordion-item>;
}

AccordionItem.propTypes = {
  children: PropTypes.node,

  /**
   * ID of the Accordion Item
   */
  id: PropTypes.string,

  /**
   * The accordion item header text
   */
  header: PropTypes.string,

  /**
   * Optional accordion item subheader text
   */
  subheader: PropTypes.string,

  /**
   * Header level for button wrapper. Must be between 1 and 6
   */
  level: PropTypes.number,

  /**
   * True if the item is open
   */
  open: PropTypes.bool,

  uswds: PropTypes.bool,
};

export { AccordionItem as default };
