import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

class SelectedBeast extends React.Component {
  
  render() {
    return (
      
       <Modal
       show = {this.props.showModal}
      //  onHide={this.props.hideModal}
       >

        <Modal.Header> 
          {this.props.theBeast.title}
        </Modal.Header>
        <img src={this.props.theBeast.image_url} alt={this.props.theBeast.title}/>
        <Modal.Body> 
          {this.props.theBeast.description}
        </Modal.Body>
       <Modal.Footer>
         <Button onClick= {this.props.hideModal}>CLOSE</Button>
       </Modal.Footer>
       </Modal>
  
    )}
}
export default SelectedBeast;