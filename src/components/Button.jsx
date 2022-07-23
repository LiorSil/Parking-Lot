// import styled from 'styled-components';
import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    //<button class="button-25" role="button">Button 25</button>

    <button
      type={props.type}
      className="button-85"
      onClick={props.onClick}
      role="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
