import React from "react";
import PropTypes from "prop-types";
import TypographyM from "@mui/material/Typography";
import "./styles.scss";

function Typography(props) {
  return <TypographyM {...props}>{props.children}</TypographyM>;
}

Typography.propTypes = {
  /**
   * The typography style to apply.
   * @uxpinpropname  Text
   */
  children: PropTypes.node,

  /**
   * Map typography to html tag.
   * @uxpinpropname  Tag
   */
  component: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "a", "ul", "ol", "li"]),

  /**
   * Override or extend the styles applied to the component.
   */
  className: PropTypes.oneOf(["va-introtext", "bold"]),

  /**
   * Alignment of text.
   */
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),

  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,

  /**
   *  Controls if typography is inline or block level.
   */
  display: PropTypes.oneOf(["initial", "block", "inline"]),

  /**
   * Color of text.
   * @uxpinpropname  Font Color
   */
  color: PropTypes.string,

  /**
   * Override or extend the styles applied to the component.
   */
  fontWeight: PropTypes.oneOf(["normal", "bold"]),

  /**
   * Override or extend the styles applied to the component.
   */
  fontStyle: PropTypes.oneOf(["normal", "italic"]),
};

export default Typography;
// export { Typography as default };
