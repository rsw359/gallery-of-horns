import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css'

class Main extends React.Component {
  render() {
    // console.log(this.props.data);

    

    let animal = this.props.listBeast.map((beast, index) => { 
     return ( <HornedBeast
      imgUrl= {beast.image_url}
      title={beast.title}
      description={beast.description}
      keyword={beast.keyword}
      horns={beast.horns}
      key = {index}
      handleModal = {this.props.handleModal}
      hideModal = {this.props.hideModal}
      stateFunction = {this.props.stateFunction}
      />
    )})
    return ( 
      <main>
      {animal}
     </main>
    )
  }
}

export default Main;