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
  Link
} from 'react-router-dom';
import ProjectIndex from '../projects/ProjectIndex';
import MaterialIndex from '../materials/MaterialIndex';
import Signup from '../auth/Signup';
import ProjectCreate from '../projects/ProjectCreate';
import ProjectsEdit from '../projects/ProjectEdit';
import Auth from '../auth/Auth'
import Home from '../home/Home';


interface IProps {
  // fetchProjects: (fetchProjects: string) => string,
  updateToken: (newToken: string) => void
  
}

interface IState {
  projectName: string,
  medium: string, 
  totalMaterialCost: number
}

export default class Sitebar extends Component <IProps, IState>{
  constructor(props: IProps) {
      super(props)
      this.state = {
          isOpen: false,        
      };
  }
  
  toggle = () => this.setState({isOpen: !this.state.isOpen});

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
           <Link to="/MaterialIndex">My Materials</Link>
            </NavItem>
            <NavItem><Button onClick={this.props.clickLogout}>Logout</Button>
            </NavItem>
            {/* <NavItem>
              <Link to="/Signup" onClick={this.toggle}>Sign Up</Link>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
     
      <div>
        <Switch>
        
         <Route exact path="/ProjectIndex"><ProjectIndex token={this.props.token} /></Route>
         <Route exact path="/MaterialIndex"><MaterialIndex token={this.props.token} /></Route>
         <Route exact path="/ProjectCreate"><ProjectCreate toggleComponent={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/></Route>
        
         {/* <Route exact path="/Signup"><Signup isOpen={this.state.isOpen} onClick={this.toggle}updateToken={this.props.updateToken} /></Route> */}
         
        </Switch>
      </div>
      </Router>
      <div>
      <Home token={this.props.token} />
      </div>
    </div>
  );
}
}
