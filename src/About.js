import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img3.png";

function About() {
  return (
    <>
      <Common
      // This is the opening tag for a custom React component named "Common."
        name="Welcome to the world of"
        // This is a prop named "name" with the value "Welcome to the world of"
        imgsrc={web}
        //This is another prop named "imgsrc" which appears to be set to the value of a variable or import called "web."
        visit="/contact"
        //This is a prop named "visit" set to the value "/contact," which typically represents the URL or path to be visited when a user interacts with this component.
        btname="Contact Us"
        //This is a prop named "btname" with the value "Contact Us,"
      />
    </>
  );
}

export default About;
