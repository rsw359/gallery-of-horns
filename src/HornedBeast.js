import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes : 0
    }
  }
  render() {
    return (
    <div>
      <h2>{this.props.title}</h2>
      <img src = {this.props.imgUrl} alt = ""/>
      <p>{this.props.description}</p>
    </div>
    )
  }
}

export default HornedBeast;