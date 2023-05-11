import * as React from "react";
import Accordion from "../Accordion";
import AccordionItem from "../../AccordionItem/AccordionItem";

export default (
  <Accordion uxpId="accordion-1" uswds={true}>
    <AccordionItem uxpId="accordion-item-1" header="First Accordion Item" id="first" uswds={true}>
      This is Accordion Item 1 text.
    </AccordionItem>
    <AccordionItem uxpId="accordion-item-2" header="Second Accordion Item" id="second" uswds={true}>
      This is Accordion Item 2 text.
    </AccordionItem>
  </Accordion>
);
