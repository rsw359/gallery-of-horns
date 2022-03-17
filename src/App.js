
import './App.css';
import React from 'react';
import Header from "./Header.js";
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast'
import data from './data.json'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showModal:false,
      
      
    }
   
  };


  showModal = () => {
    this.setState({
      showModal: true,
    
    });
  };
 
  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };
  
  stateFunction = (title) => {
    console.log(title);
    let thisBeast = data.find(beast => beast.title === title)
    console.log(thisBeast);
    this.setState({
      selectedBeast: thisBeast
    })
    console.log(this.state.selectedBeast);
  }

  render() {
    return (
      <>
        <Header className="headerCont" />
        <Main className="MainCont"
          data={data}
          stateFunction={this.stateFunction}
          toggleModal = {this.openModal}
          
        />
        <SelectedBeast theBeast = {this.state.selectedBeast}
        showModal = {this.state.showModal}
        hideModal = {this.hideModal}
        />
        <Footer className="FootCont" />

      </>
    );

  }
}
export default App;
