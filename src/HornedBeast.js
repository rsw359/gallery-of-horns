import React from "react";
import Card from 'react-bootstrap/Card'; 
import './HornedBeast.css'

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

    <Card id = 'card' style={{ width: '18rem', margin:'2vw', border: 'solid 2px'}} >
      <article>
    <Card.Img style={{border: 'solid .5px'}}variant="top" src= {this.props.imgUrl} alt="" onClick={this.handleFavs} />
    <Card.Body >
    <Card.Title id = 'title' >{this.props.title}</Card.Title>
    <Card.Text id = 'cardtxt'>
      <p>{this.state.favorites} ♥️</p>
      <p>{this.props.description}</p>
    </Card.Text>
    </Card.Body>
    </article>
    </Card>

    // <Card>
    //     <article>
    //       <h2>{this.props.title}</h2>
    //       <img src = {this.props.imgUrl} alt = "" onClick={this.handleFavs} />
    //       <p>
    //         {this.state.favorites} ♥️
    //       </p>
    //       <p>{this.props.description}</p>

    //     </article>
    // </Card>
    )
  }
}

export default HornedBeast;