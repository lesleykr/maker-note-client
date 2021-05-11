import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from 'react-router-dom';
import ProjectIndex from '../projects/ProjectIndex';
import MaterialIndex from '../materials/MaterialIndex';
import Signup from '../auth/Signup';
import ProjectCreate from '../projects/ProjectCreate';
import ProjectsEdit from '../projects/ProjectEdit';
import Auth from '../auth/Auth'
import { Button } from 'reactstrap';
import Sitebar from './Navbar';
import MaterialCreate from '../materials/MaterialCreate';
import UserIndex from "../users/UserIndex";
import ProjectView from "../projects/ProjectView";
import styled from 'styled-components'


const Mdiv = styled.div`
// position: fixed;
// top: 50%;
// left: 50%;
// margin-top: -50px;
// margin-left: -100px
`

const Sh1 = styled.h1`
font-family: 'Tempus Sans ITC';
text-align: center;
color: #b820d1;
margin-top: 35vh;
`



export default class Home extends Component <{},{}>{
  constructor(props) {
    super(props)
  
}


render() {
return (
  <div>
<Mdiv>
  <Sh1>Welcome!<br/>
  Click Above to Add A New Project or Material!</Sh1>
  
  </Mdiv> 


  </div>
);
}
}