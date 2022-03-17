
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


  handleModal = () => {
    console.log('before', this.state)
    this.setState({
      showModal: true,
    
    
    });
    console.log('after', this.state)
  };
 
  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };
  
  stateFunction = (title) => {
    console.log(title);
    let thisBeast = data.find(beast => beast.title === title)
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
          handleModal = {this.handleModal}
          
        />
        <SelectedBeast 
        theBeast = {this.state.selectedBeast}
        showModal = {this.state.showModal}
        hideModal = {this.hideModal}
        />
        <Footer className="FootCont" />

      </>
    );

  }
}
export default App;
