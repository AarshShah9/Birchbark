import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionState {
  faqItems: FAQItem[];
  expandedItems: Set<number>; // Set to store the indices of expanded items
}

interface FAQAccordionProps {
  faqItems: FAQItem[];
}

const FAQS: React.FC<FAQAccordionProps> = ({ faqItems }) => {
  const [accordionState, setAccordionState] = useState<FAQAccordionState>({
    faqItems,
    expandedItems: new Set(),
  });
  const toggleItem = (index: number) => {
    const { expandedItems } = accordionState;
    const newExpandedItems = new Set(expandedItems);

    if (expandedItems.has(index)) {
      newExpandedItems.delete(index);
    } else {
      newExpandedItems.add(index);
    }

    setAccordionState({ ...accordionState, expandedItems: newExpandedItems });
  };
  return (
    <div>
      {accordionState.faqItems.map((item, index) => (
        <div key={index}>
          <div onClick={() => toggleItem(index)} style={{ cursor: "pointer" }}>
            {item.question}
          </div>
          {accordionState.expandedItems.has(index) && <div>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQS;
