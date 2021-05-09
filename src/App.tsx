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


interface IProps {
  
}

interface IState{
  sessionToken: string,
  sessionAdmin: string,
  sessionFirstName: string   
}

export default class App extends Component {  
    state = {
      sessionToken: ''   ,
      sessionAdmin: "",
      sessionFirstName: "",  
    }
  
componentDidMount(){
  console.log("hello");
  if(localStorage.getItem('token')){
    this.setState({sessionToken: localStorage.getItem('token')});
  };
}

  updateToken = (newToken: string, newAdmin: string, newFirstName: string) => { 
    localStorage.setItem('token', newToken);
    localStorage.setItem('admin', newAdmin)
    localStorage.setItem('firstName', newFirstName)
    this.setState({sessionToken: newToken});
    this.setState({sessionAdmin: newAdmin});
    this.setState({sessionName: newFirstName})
    console.log(this.state.sessionToken);  
    }
    
    clearToken = () => {
      localStorage.clear();
      this.setState({sessionToken: ""});
      window.location.href = "/"
    }
    
    protectedViews = () => {
      return (this.state.sessionToken === localStorage.getItem('token') ? <Sitebar token={this.state.sessionToken}  isAdmin={localStorage.getItem('admin')} firstName={localStorage.getItem('firstName')} clickLogout={this.clearToken}  /> 
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
           {/* <Router>
          <Switch>
<Route exact path="/Auth"><Auth updateToken={this.updateToken.bind(this)}/></Route>
<Route exact path="/Admin"><Admin /></Route>
          </Switch>
          </Router> */}
    
          {/* <Sitebar clickLogout={this.clearToken}  /> */}
          {this.protectedViews()}
    

 </div>
       
    
  );
}
}