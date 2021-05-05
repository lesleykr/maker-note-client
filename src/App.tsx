import React, { Component } from 'react';
import './App.css'
import Auth from './auth/Auth';
import Sitebar from './home/Navbar';
import ProjectsEdit from './projects/ProjectEdit';
import ProjectIndex from './projects/ProjectIndex';
import MaterialIndex from './materials/MaterialIndex'
import {Redirect, Switch, Route} from 'react-router-dom';
import Home from './home/Home';

export default class App extends Component {  
    state = {
      sessionToken: ''      
    }
  
componentDidMount(){
  console.log("hello");
  if(localStorage.getItem('token')){
    this.setState({sessionToken: localStorage.getItem('token')});
  };
}

  updateToken = (newToken: string) => { 
    localStorage.setItem('token', newToken);
    this.setState({sessionToken: newToken});
    console.log(this.state.sessionToken);
    }
    
    clearToken = () => {
      localStorage.clear();
      this.setState({sessionToken: ""});
      window.location.href = "/"
    }
    
    protectedViews = () => {
      return (this.state.sessionToken === localStorage.getItem('token') ? <Sitebar token={this.state.sessionToken} clickLogout={this.clearToken}  /> 
      : <Auth updateToken={this.updateToken.bind(this)}/>)
    }
   
    // && <MaterialIndex token={this.state.sessionToken}/>

render() {
  return(
    <div>
     
    
          {/* <Sitebar clickLogout={this.clearToken}  /> */}
          {this.protectedViews()}
        </div>
    
  );
}
}