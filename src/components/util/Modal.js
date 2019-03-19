import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default class ModalComponent extends Component {
  state = {
    isOpen: this.props.isOpen ? this.props.isOpen : false,
    title: this.props.title ? this.props.title : "",
    body: this.props.body ? this.props.body : ""
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  render() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
        <ModalBody>{this.state.body}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>
            Aceptar
          </Button>{" "}
          {/* <Button color="secondary" onClick={this.toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    );
  }
}
