import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

class SelectedBeast extends React.Component {
  
  render() {
    return (
      
       <Modal
       show={this.props.showModal}
      //  onHide={this.props.hideModal}
       >

        <Modal.Header> header
          {/* <Modal.Title>{this.props.title}</Modal.Title> */}
        </Modal.Header>
        {/* <img src={this.props.imgUrl} alt={this.props.title}></img> */}
        <Modal.Body> body
          {/* <p>{this.props.description}</p> */}
        </Modal.Body>
       <Modal.Footer>
         <Button onclick= {this.props.hideModal}>CLOSE</Button>
       </Modal.Footer>
       </Modal>
  
    )}
}
export default SelectedBeast;