import { useState } from "react";
import "./Accordion.css";

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
        <div className={`accordion-icon ${isOpen ? "open" : ""}`}>
          <i class="fa-solid fa-arrow-down"></i>
        </div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
