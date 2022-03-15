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

      <HornedBeast 
      title = "Triceratos" 
      imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4j1_TxHu22qjrXzibu-Xpi9RYX9giM0fpQ&usqp=CAU"
      description = "This too is a horned beast"
      />
      

      </main>
    )
  }
}

export default Main;