import React, { Component } from "react";
import {
  Button,
  Container,
  Alert,
  InputGroup,
  InputGroupAddon,
  Input,
  Card,
  Row,
  Col,
  CardText,
  CardTitle,
  Form,
  CardHeader
} from "reactstrap";
import imgUrl from "../../assets/background1.jpg";

import Modal from "./../../components/util/Modal";

class Register extends Component {
  state = {
    alertVisible: false,
    modal: false
  };

  handleAlert = () => {
    this.setState({
      alertVisible: !this.state.alertVisible
    });
  };
  handleModal = prevstate => {
    this.setState({
      modal: !prevstate.modal
    });
  };
  render() {
    return (
      <Container style={styles.root}>
        <Modal
          isOpen={this.state.modal}
          title="Registro Exitoso"
          body="Su cuenta ha sido registrada, gracias por su tiempo"
        />
        <h1>Pagina de Registo</h1>
        <Button color="primary" onClick={this.handleModal}>
          Button
        </Button>
        <Button color="info" onClick={this.handleAlert}>
          Button
        </Button>
        <Alert
          isOpen={this.state.alertVisible}
          toggle={this.handleAlert}
          color="primary"
        >
          Esto es un Alert
        </Alert>
        <br />
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 6 }}>
            <Card body>
              <CardHeader>Header</CardHeader>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Form>
                <InputGroup className="my-2">
                  <InputGroupAddon addonType="prepend">N</InputGroupAddon>
                  <Input placeholder="Nombre" />
                </InputGroup>
                <InputGroup className="my-3">
                  <InputGroupAddon addonType="prepend">A</InputGroupAddon>
                  <Input placeholder="Apellidos" />
                </InputGroup>
                <InputGroup className="my-3">
                  <InputGroupAddon addonType="prepend">T</InputGroupAddon>
                  <Input placeholder="Telefono" />
                </InputGroup>
                <InputGroup className="my-3">
                  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                  <Input placeholder="correo" />
                </InputGroup>
                <InputGroup className="my-3">
                  <InputGroupAddon addonType="prepend">*</InputGroupAddon>
                  <Input placeholder="Password" />
                </InputGroup>
                <InputGroup className="my-3">
                  <InputGroupAddon addonType="prepend">*</InputGroupAddon>
                  <Input placeholder="Password" />
                </InputGroup>
                <Button block color="success">
                  {" "}
                  Registrarme!
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

let styles = {
  root: {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    overflow: "hidden"
  }
};
export default Register;
