import React from 'react';
import './App.css';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
    const dom = <div><Header/><Body/><Footer/></div>;
    return(dom);
  }
}

export default App;
