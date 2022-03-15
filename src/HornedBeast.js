import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
    <hornedBeast>
      <h2>{this.props.title}</h2>
      <img src = {this.props.imgUrl} alt = ""/>
      <p>{this.props.description}</p>
    </hornedBeast>
    )
  }
}

export default HornedBeast;