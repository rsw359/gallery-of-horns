import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
    <main>
      <HornedBeast 
      title = "Rhino" 
      imgUrl = "https://media.savetherhino.org/prod/uploads/2018/02/Species-Black-Credit-Phill-Perry-768x511.jpg" 
      description = "This is a horned beast"
      />
      

      </main>
    )
  }
}

export default Main;