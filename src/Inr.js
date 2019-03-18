import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Inr = props => {
  const inrcallhandler = e => {
    props.inrcall(e.target.value);
  };
  return (
    <div>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">INR</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={props.inr}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={inrcallhandler}
        />
      </InputGroup>
    </div>
  );
};

export default Inr;
