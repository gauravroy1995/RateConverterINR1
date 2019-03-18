import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Usd = props => {
  const usdcallhandler = e => {
    props.usdcall(e.target.value);
  };
  return (
    <div>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">USD</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={props.usd}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={usdcallhandler}
        />
      </InputGroup>
    </div>
  );
};

export default Usd;
