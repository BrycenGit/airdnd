import React from "react";
import PropTypes from "prop-types";

function Experience(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.description}</h3>
    </React.Fragment>
  );
}

Experience.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export default Experience;