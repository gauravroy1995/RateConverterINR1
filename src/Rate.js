import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Rate = props => {
  const ratecallhandler = e => {
    props.ratecall(e.target.value);
  };
  return (
    <div>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">Rate</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={props.rate}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={ratecallhandler}
        />
      </InputGroup>
    </div>
  );
};

export default Rate;
