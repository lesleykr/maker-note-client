import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
import ProjectIndex from '../projects/ProjectIndex';
import MaterialIndex from '../materials/MaterialIndex';
import ProjectCreate from '../projects/ProjectCreate';
import MaterialCreate from '../materials/MaterialCreate';
import UserIndex from '../users/UserIndex';
import AdUserIndex from '../users/admin/AdUserIndex';
import './NavbarStyles.css';
import { Button, Navbar, Nav } from 'react-bootstrap';

interface IProps {
  token: string,
  clickLogout: () => void,
  admin: string | null  
}

export default class Sitebar extends Component<IProps, {}>{
  constructor(props: IProps) {
    super(props)

  }

  render() {
    return (

      <Router>
        <Navbar sticky="top" id="navbar" expand="lg">
          <Navbar.Brand id="navbrand" href="/">MakerNote</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="navlink" ><Link className="link" to="/ProjectIndex">My Projects</Link></Nav.Link>
              <Nav.Link className="navlink" ><Link className="link" to="/ProjectCreate">New Project</Link></Nav.Link>
              <Nav.Link className="navlink"><Link className="link" to="/MaterialIndex">My Materials</Link></Nav.Link>
              <Nav.Link className="navlink"><Link className="link" to="/MaterialCreate">New Material</Link></Nav.Link>
              <Nav.Link className="navlink" ><Link className="link" to="/UserIndex">My Account</Link></Nav.Link>

              <Nav.Link className="navlink"> {this.props.admin === "true" ? <Link className="link" to="/AdUserIndex">Admin Dashboard</Link> : null}</Nav.Link>

            </Nav>
            <Nav.Link id="logoutnav" className="ml-auto"><Button id="logoutbutton" onClick={this.props.clickLogout}>Logout</Button></Nav.Link>

          </Navbar.Collapse>
        </Navbar>


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
