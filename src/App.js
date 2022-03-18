
import './App.css';
import React from 'react';
import Header from "./Header.js";
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast'
import data from './data.json';
import { Form } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false,
      listBeast: data,
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

  handleSelect = (e) => {
    let selected = parseInt(e.target.value)
    console.log(e.target.value)
    let beasties = data.filter(hornNum => hornNum.horns === selected);
    console.log(beasties);
    this.setState({listBeast: beasties});   

  };
  

  render() {
    console.log(this.state.listBeast);
    return (
      <>
        <Header className="headerCont"/>

        <Form>

          <Form.Select name="selected" onChange={(this.handleSelect)}>
            <option>Select number of Horns</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horns</option>
            <option value="3">Three Horns</option>
            <option value="100">Super Horned!</option>
          </Form.Select>

        </Form>

        <Main className="MainCont"
          data={data}
          stateFunction={this.stateFunction}
          handleModal={this.handleModal}
          listBeast = {this.state.listBeast}

        />
        <SelectedBeast
          theBeast={this.state.selectedBeast}
          showModal={this.state.showModal}
          hideModal={this.hideModal}
        />
        <Footer className="FootCont" />

      </>
    );

  }
}
export default App;
