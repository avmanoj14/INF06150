import Accordion from "../accordian/Accordion";
import "./CatFacts.css";

import factsData from "./factsData";

function CatFacts() {
  return (
    <div className="facts__content">
      <Accordion items={factsData} />
    </div>
  );
}

export default CatFacts;
