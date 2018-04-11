import React, { Component } from 'react';
import { Button, Jumbotron, FormGroup, ControlLabel, FormControl,  HelpBlock, Form, Col, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
          <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type="password" placeholder="Password" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Link to='/dashboard'>

          <Button type="submit">Sign in</Button>
          </Link>
        </Col>
      </FormGroup>
      </Form>
    )
  }
}

export default Login;
