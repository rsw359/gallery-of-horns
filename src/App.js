
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
        <Header/>
          <Main 
          data = {data}
          />
        <Footer/>
      </>
    );

  }
}
export default App;
