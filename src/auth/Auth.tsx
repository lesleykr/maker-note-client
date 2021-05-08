import React, {Component} from 'react';
import Signup from './Signup';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from 'react-router-dom';
import {Button} from 'reactstrap';
import './Auth.css'

interface IProps {
    updateToken: Function
}


export default class Auth extends Component <IProps, {}>{
    constructor(props: IProps) {
        super(props)
       
    }

    
render() {

    return(
       <div className="auth">
           <div>
           <Router>
           <Link to="/Signup"><Button>Sign Up</Button></Link>
           <Link to="/Login"><Button>Login</Button></Link>
<div>
          <Switch> 
                 <Route exact path="/Signup"><Signup updateToken={this.props.updateToken}/></Route>               
                 <Route exact path="/Login"><Login updateToken={this.props.updateToken}/></Route>
                   </Switch> 
                   </div>
                   </Router>
                   </div>
        </div>
    )
}
}
