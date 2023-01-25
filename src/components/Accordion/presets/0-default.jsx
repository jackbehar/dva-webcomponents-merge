import * as React from "react";
import Accordion from "../Accordion";
import AccordionItem from "../../AccordionItem/AccordionItem";


export default (
  <Accordion uxpId="accordion-1">
    <AccordionItem uxpId="accordion-item-1"
      header="First Accordion Item"
      id="first"
    >
      This is Accordion Item 1 text.
    </AccordionItem>
    <AccordionItem uxpId="accordion-item-2"
      header="Second Accordion Item"
      id="second"
    >
      This is Accordion Item 2 text.
    </AccordionItem>
  </Accordion>
);
