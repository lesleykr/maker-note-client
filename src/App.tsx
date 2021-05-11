import React, { Component } from 'react';
import './App.css'
import Auth from './auth/Auth';
import Sitebar from './home/Navbar';
import ProjectsEdit from './projects/ProjectEdit';
import ProjectIndex from './projects/ProjectIndex';
import MaterialIndex from './materials/MaterialIndex'
import {Redirect, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home/Home';
import Admin from "./users/admin/Admin";
import 'bootstrap/dist/css/bootstrap.min.css';


interface IProps {
  
}

interface IState{
  sessionToken: string,
  sessionAdmin: string,
  stateChange: boolean  
}

export default class App extends Component {  
    state = {
      sessionToken: ''   ,
      sessionAdmin: "",
      stateChange: false   
    }
  
componentDidMount(){
  console.log("hello");
  if(localStorage.getItem('token')){
    this.setState({sessionToken: localStorage.getItem('token')});
  };
}

  updateToken = (newToken: string, newAdmin: string) => { 
    localStorage.setItem('token', newToken);
    localStorage.setItem('admin', newAdmin)  
    this.setState({sessionToken: newToken});
    this.setState({sessionAdmin: newAdmin});    
    console.log(this.state.sessionToken);  
    }
    
    clearToken = () => {
      localStorage.clear();
      this.setState({sessionToken: ""});
      window.location.href = "/"
    }

    
    protectedViews = () => {
      return (this.state.sessionToken === localStorage.getItem('token') ? <Sitebar token={this.state.sessionToken}  admin={localStorage.getItem('admin')} clickLogout={this.clearToken}  /> 
      : <Auth updateToken={this.updateToken.bind(this)}/>)
    }

    // protectedViews = () => {
    //   return ((localStorage.getItem("admin" === true)) ? <Admin token={this.state.sessionToken} isAdmin={localStorage.getItem('admin')}/> 
    //   : <Sitebar token={this.state.sessionToken} clickLogout={this.clearToken}  /> )
    // }



    // protectedViews = () => {
    //   if(localStorage.getItem("isAdmin") != null){
    //     return <Redirect to="/Admin"></Redirect>;
    //   } else {
    //     <Redirect to="/Auth"></Redirect>
    //   }
    // }
   
    // && <MaterialIndex token={this.state.sessionToken}/>

render() {
  return(
    
    
    <div>

          {this.protectedViews()}
       
         
    

 </div>
       
    
  );
}
}