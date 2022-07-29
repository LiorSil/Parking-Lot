import React, { Fragment } from "react";
import Section from "./Section";
const SectionsList = ({ sections }) => {
  return (
    <Fragment>
      {[
        <Section key={"a"} Area={"A"} amount={10} data={sections.secA} />,
        <Section key={"b"} Area={"B"} amount={10} data={sections.secB} />,
        <Section key={"c"} Area={"C"} amount={10} data={sections.secC} />,
        <Section key={"d"} Area={"D"} amount={10} data={sections.secD} />,
      ]}
    </Fragment>
  );
};

export default SectionsList;
