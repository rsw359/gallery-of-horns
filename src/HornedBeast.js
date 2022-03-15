import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites : 0
    }
  }

  handleFavs = () =>{
    this.setState({
      favorites : this.state.favorites + 1
    })
  }

  render() {
    return (
    <div>
      <h2>{this.props.title}</h2>
      <img src = {this.props.imgUrl} alt = "" onClick={this.handleFavs} />
      <p>
        {this.state.favorites} Favorites
      </p>
      <p>{this.props.description}</p>

    </div>
    )
  }
}

export default HornedBeast;