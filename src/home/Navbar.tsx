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


interface IProps {
  // fetchProjects: (fetchProjects: string) => string,
  updateToken: (newToken: string) => void,
  token: string,
  clickLogout: () => void,
  isAdmin: string | null
  
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
  
  // toggle = () => this.setState({isOpen: !this.state.isOpen});

  // buttonVisMM = () => {
  //   this.setState({buttonInvisible: true});
  //   // window.location.href = "/MaterialIndex"
  // }
  // buttonVisMP = () => {
  //   this.setState({buttonInvisible: true});
  //   // window.location.href = "/MaterialIndex"
  // }
  // buttonVisNM = () => {
  //   this.setState({buttonInvisible: true});
  //   // window.location.href = "/MaterialIndex"
  // }
  // buttonVisNP = () => {
  //   this.setState({buttonInvisible: true});
  //   // window.location.href = "/MaterialIndex"
  // }
  // buttonInVis = () => {
  //   this.setState({buttonInVisible: false});
  // }

  render() {
  return (
    <div>
       <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MakerNote</NavbarBrand>
        {/* <NavbarToggler onClick={this.toggle} /> */}
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
          {/* <NavItem>
           <Link to="/ProjectIndex">My Projects</Link>
            </NavItem>            
            <NavItem>
           <Link to="/MaterialIndex">My Materials</Link>
            </NavItem> */}
            <NavItem><Button onClick={this.props.clickLogout}>Logout</Button>
            </NavItem>
            {/* <NavItem>
              <Link to="/Signup" onClick={this.toggle}>Sign Up</Link>
            </NavItem> */}

          </Nav>
    
        </Collapse>
      </Navbar>
     
{/* {this.state.buttonInvisible ? <Home token={this.props.token} buttonVisMM={this.buttonVisMM}/> : null}
{this.state.buttonInvisible ? <Home token={this.props.token} buttonVisMP={this.buttonVisMP}/> : null}
{this.state.buttonInvisible ? <Home token={this.props.token} buttonVisNM={this.buttonVisNM}/> : null}
{this.state.buttonInvisible ? null : <Home token={this.props.token} buttonVisNP={this.buttonVisNP}/> } */}
{this.props.isAdmin === "true" ? <Button>Admin</Button> : null}
<div>
      <Home token={this.props.token} />
      </div>


      </Router>
    </div>
  );
}
}



// <div>
// <Switch>

//  <Route exact path="/ProjectIndex"><ProjectIndex token={this.props.token} /></Route>
//  <Route exact path="/MaterialIndex"><MaterialIndex token={this.props.token} /></Route>
//  <Route exact path="/ProjectCreate"><ProjectCreate toggleComponent={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/></Route>
//  <Route exact path="/Home"><Home /></Route>
//  <Route exact path="/MaterialCreate"><MaterialCreate fetchMaterial={this.fetchMaterials}token={this.props.token} /></Route>
//  {/* <Route exact path="/Signup"><Signup isOpen={this.state.isOpen} onClick={this.toggle}updateToken={this.props.updateToken} /></Route> */}
 
// </Switch>
// </div>