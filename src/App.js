
import './App.css';
import React from 'react';
import Header from "./Header.js";
import Main from './Main';
import Footer from './Footer';


class App extends React.Component {
  render(){
    return(
      <>
        <Header/>
          <Main />
        <Footer/>
      </>
    );

  }
}
export default App;
