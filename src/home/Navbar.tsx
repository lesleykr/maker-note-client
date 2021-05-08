import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Modal,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
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


interface IProps {
  // fetchProjects: (fetchProjects: string) => string,
  token: string,
  clickLogout: () => void,
  isAdmin: string | null,
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
      this.state = {
          isOpen: false,  
          buttonsInvisible: false,
          isActive: false
      };
  }

  handleHide = () => {
    this.setState({isActive: true})
  }
  
  render() {
  return (
    <div>
       <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MakerNote</NavbarBrand>
        {/* <NavbarToggler onClick={this.toggle} /> */}
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
           <Link to="/ProjectIndex">My Projects</Link>
            </NavItem>  
            <NavItem>
            <Link to="/ProjectCreate">New Project</Link>
            </NavItem>          
            <NavItem>
           <Link to="/MaterialIndex">My Materials</Link>
            </NavItem>
            <NavItem>
           <Link to="/MaterialCreate">New Material</Link>
            </NavItem>
            <NavItem>
           <Link to="/UserIndex">My Account</Link>
            </NavItem>
            <NavItem>
            {this.props.isAdmin === "true" ? <Link to="/AdUserIndex">All Users</Link> : null}
            </NavItem>
            <NavItem><Button onClick={this.props.clickLogout}>Logout</Button>
            </NavItem>
            <NavItem><p>Hello {this.props.firstName}!</p></NavItem>
            {/* <NavItem>
              <Link to="/Signup" onClick={this.toggle}>Sign Up</Link>
            </NavItem> */}

          </Nav>
       
        </Collapse>
      </Navbar>
      <div>
<Switch>

 <Route exact path="/ProjectIndex"><ProjectIndex token={this.props.token} /></Route>
 <Route exact path="/MaterialIndex"><MaterialIndex token={this.props.token} /></Route>
 <Route exact path="/ProjectCreate"><ProjectCreate token={this.props.token}/></Route>
 {/* <Route exact path="/Home"><Home /></Route> */}
 <Route exact path="/MaterialCreate"><MaterialCreate token={this.props.token}/></Route>
       <Route exact path="/UserIndex"><UserIndex token={this.props.token} /></Route>
       <Route exact path="/AdUserIndex"><AdUserIndex token={this.props.token} /></Route>
 {/* <Route exact path="/Signup"><Signup isOpen={this.state.isOpen} onClick={this.toggle}updateToken={this.props.updateToken} /></Route> */}
 
</Switch>
</div>


      </Router>
    </div>
  );
}
}



