
import './App.css';
import React from 'react';
import Header from "./Header.js";
import Main from './Main';
import Footer from './Footer';
import data from './data.json'


class App extends React.Component {
  render(){
    return(
      <>
        <Header className = "headerCont"/>
          <Main className = "MainCont "
          data = {data}
          />
        <Footer className = "FootCont"/>
      </>
    );

  }
}
export default App;
