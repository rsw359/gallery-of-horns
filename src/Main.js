import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    console.log(this.props.data);

    let animals = [];

    this.props.data.forEach((beast, index) => { animals.push(
      <HornedBeast
      imgUrl= {beast.image_url}
      title={beast.title}
      description={beast.description}
      keyword={beast.keyword}
      horns={beast.horns}
      key = {index}
      />
    )})
    return ( 
      
    <main>
      {animals}
    </main>
    )
  }
}

export default Main;