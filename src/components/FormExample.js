import React, { Component } from 'react';
import { Button, Jumbotron, FormGroup, ControlLabel, FormControl,  HelpBlock } from 'react-bootstrap';

function FieldGroup({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

class FormExample extends Component {
  render() {
    return (
      <form>
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email Address"
          placeholder="Enter Email"
        />
        <FieldGroup
          id="formControlsPassword"
          label="Password"
          type="password"
        />
        <Button type="submit">Login</Button>
      </form>
    )
  }
}
