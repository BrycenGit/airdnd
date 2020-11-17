import React from "react";
import PropTypes from "prop-types";

function Link(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <hr/>
    </React.Fragment>
  );
}

Link.propTypes = {
  name: PropTypes.string
}

export default Link;