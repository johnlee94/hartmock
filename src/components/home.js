import React, { Component } from 'react';
import { Button, Jumbotron, FormGroup, ControlLabel, FormControl,  HelpBlock } from 'react-bootstrap';
import FormValidation from './FormValidation';
import Login from './Login';

function FieldGroup({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hello, Hart!</h1>
          <Login/>
        </Jumbotron>
      </div>
    )
  }
}

export default Home;
