import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import ProjectIndex from '../projects/ProjectIndex';
import MaterialIndex from '../materials/MaterialIndex';
import ProjectCreate from '../projects/ProjectCreate';
import MaterialCreate from '../materials/MaterialCreate';
import UserIndex from '../users/UserIndex';
import AdUserIndex from '../users/admin/AdUserIndex';
import './NavbarStyles.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import AllProjectsIndex from '../projects/publicprojects/AllProjectsIndex';

interface IProps {
  token: string,
  clickLogout: () => void,
  admin: string | null  
}

interface IState{
  viewToggle: boolean
}

export default class Sitebar extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)  
    this.state = {
      viewToggle: false
    }
  }

  setViewToggle = () => {
    this.setState({viewToggle: true})
  }

  render() {
    return (

      <Router>
        <Navbar sticky="top" id="navbar" expand="lg">
          <Navbar.Brand id="navbrand" href="/">MakerNote</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <Nav.Link onClick={this.setViewToggle} className="navlink"><Link className="link" to="/ProjectIndex">My Projects</Link></Nav.Link>
              <Nav.Link onClick={this.setViewToggle} className="navlink"><Link className="link" to="/ProjectCreate">New Project</Link></Nav.Link>
              <Nav.Link onClick={this.setViewToggle} className="navlink"><Link className="link" to="/MaterialIndex">My Materials</Link></Nav.Link>
              <Nav.Link onClick={this.setViewToggle} className="navlink"><Link className="link" to="/MaterialCreate">New Material</Link></Nav.Link>
              <Nav.Link onClick={this.setViewToggle} className="navlink"><Link className="link" to="/UserIndex">My Account</Link></Nav.Link>

              <Nav.Link onClick={this.setViewToggle} className="navlink"> {this.props.admin === "true" ? <Link className="link" to="/AdUserIndex">Admin Dashboard</Link> : null}</Nav.Link>

            </Nav>
            <Nav.Link id="logoutnav" className="ml-auto"><Button id="logoutbutton" onClick={this.props.clickLogout}>Logout</Button></Nav.Link>

          </Navbar.Collapse>
        </Navbar>
      
        {window.location.pathname != "/" ? null : <AllProjectsIndex token={this.props.token} />}

        <div>
          <Switch>

            <Route exact path="/ProjectIndex"><ProjectIndex token={this.props.token} /></Route>
            <Route exact path="/MaterialIndex"><MaterialIndex token={this.props.token} /></Route>
            <Route exact path="/ProjectCreate"><ProjectCreate token={this.props.token} /></Route>
            <Route exact path="/MaterialCreate"><MaterialCreate token={this.props.token} /></Route>
            <Route exact path="/UserIndex"><UserIndex token={this.props.token} /></Route>
            <Route exact path="/AdUserIndex"><AdUserIndex token={this.props.token} /></Route>      

          </Switch>
        </div>
      </Router>

    );
  }
}
