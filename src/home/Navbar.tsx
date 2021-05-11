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
import Home from '../home/Home';
import MaterialCreate from '../materials/MaterialCreate';
import UserIndex from '../users/UserIndex';
import AdUserIndex from '../users/admin/AdUserIndex';
import styled from 'styled-components';
import './NavbarStyles.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import ImageUpload from './../imageUpload/ImageUpload'

interface IProps {
  // fetchProjects: (fetchProjects: string) => string,
  token: string,
  clickLogout: () => void,
  admin: string | null,
  firstName: string | null    
}

interface IState { 
  isActive: boolean,
  isOpen: boolean,
  buttonsInvisible: boolean  
}

export default class Sitebar extends Component <IProps, IState>{
  constructor(props: IProps) {
      super(props)
   }

 render() {
  return (
   
       <Router>
       <Navbar id="navbar" expand="lg">
  <Navbar.Brand id="navbrand" href="/">MakerNote</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Nav.Link className="navlink" ><Link className="link" to="/ProjectIndex">My Projects</Link></Nav.Link>
      <Nav.Link className="navlink" ><Link className="link" to="/ProjectCreate">New Project</Link></Nav.Link>
      <Nav.Link className="navlink"><Link className="link" to="/MaterialIndex">My Materials</Link></Nav.Link>
      <Nav.Link className="navlink"><Link className="link" to="/MaterialCreate">New Material</Link></Nav.Link>
      <Nav.Link className="navlink" ><Link className="link" to="/UserIndex">My Account</Link></Nav.Link>

      <Nav.Link className="imageupload" ><Link className="link" to="/ImageUpload">Image Upload</Link></Nav.Link>

      <Nav.Link className="navlink"> {this.props.admin === "true" ? <Link className="link" to="/AdUserIndex">Admin Dashboard</Link> : null}</Nav.Link> 

    </Nav>
       <Nav.Link id="logoutnav" className="ml-auto"><Button id="logoutbutton" onClick={this.props.clickLogout}>Logout</Button></Nav.Link> 
       
  </Navbar.Collapse>
</Navbar>      
        
      <div>
<Switch>

 <Route exact path="/ProjectIndex"><ProjectIndex token={this.props.token} /></Route>
 <Route exact path="/MaterialIndex"><MaterialIndex token={this.props.token} /></Route>
 <Route exact path="/ProjectCreate"><ProjectCreate token={this.props.token}/></Route>
 <Route exact path="/ImageUpload"><ImageUpload token={this.props.token}/></Route>

 {/* <Route exact path="/Home"><Home /></Route> */}
 <Route exact path="/MaterialCreate"><MaterialCreate token={this.props.token}/></Route>
       <Route exact path="/UserIndex"><UserIndex token={this.props.token} /></Route>
       <Route exact path="/AdUserIndex"><AdUserIndex token={this.props.token} /></Route>
 {/* <Route exact path="/Signup"><Signup isOpen={this.state.isOpen} onClick={this.toggle}updateToken={this.props.updateToken} /></Route> */}
 
</Switch>
</div>


      </Router>
   
  );
}
}



//Old Nav
// {/* <SNav expand="md">
// <SNavbarBrand href="/">MakerNote</SNavbarBrand>

// <Collapse isOpen={this.state.isOpen} navbar>
//   <Nav className="mr-auto" navbar>
//   <NavItem className="navitem">
//    <Link className="link" to="/ProjectIndex">My Projects</Link>
//     </NavItem>  
//     <NavItem className="navitem">
//     <Link className="link" to="/ProjectCreate">New Project</Link>
//     </NavItem>          
//     <NavItem className="navitem">
//    <Link className="link" to="/MaterialIndex">My Materials</Link>
//     </NavItem>
//     <NavItem className="navitem">
//    <Link className="link" to="/MaterialCreate">New Material</Link>
//     </NavItem>
//     <NavItem className="navitem">
//    <Link className="link" to="/UserIndex">My Account</Link>
//     </NavItem>
//     <NavItem>
//     {this.props.isAdmin === "true" ? <Link to="/AdUserIndex">All Users</Link> : null}
//     </NavItem>         
//     <NavItem id="greetingnav"><p id="greeting">Hello {this.props.firstName}!</p></NavItem>
//     <NavItem id="logoutnav"><Button id="logoutbutton" onClick={this.props.clickLogout}>Logout</Button>
//     </NavItem>

//   </Nav>

// </Collapse>
// </SNav>
// <div>
// <Switch>

// <Route exact path="/ProjectIndex"><ProjectIndex token={this.props.token} /></Route>
// <Route exact path="/MaterialIndex"><MaterialIndex token={this.props.token} /></Route>
// <Route exact path="/ProjectCreate"><ProjectCreate token={this.props.token}/></Route>
// {/* <Route exact path="/Home"><Home /></Route> */}
// <Route exact path="/MaterialCreate"><MaterialCreate token={this.props.token}/></Route>
// <Route exact path="/UserIndex"><UserIndex token={this.props.token} /></Route>
// <Route exact path="/AdUserIndex"><AdUserIndex token={this.props.token} /></Route>
// {/* <Route exact path="/Signup"><Signup isOpen={this.state.isOpen} onClick={this.toggle}updateToken={this.props.updateToken} /></Route> */}

// </Switch>
// </div> */}
