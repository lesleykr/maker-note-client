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


interface IProps {
  // fetchProjects: (fetchProjects: string) => string,
//   updateToken: (newToken: string) => void
  
}

interface IState {
  
}

export default class Home extends Component <IProps, IState>{
  constructor(props: IProps) {
      super(props)
      this.state = {
               
      };
  }
  

  render() {
  return (
    <div>
        <Router>
      {/* <Button onClick={() => {this.props.buttonVisMM()}}>My Materials T</Button>
      <Button onClick={() => {this.props.buttonVisMP()}}>MyProjects T</Button>
      <Button onClick={() => {this.props.buttonVisNM()}}>New Material T</Button>
      <Link to="/ProjectCreate"><Button onClick={() => {this.props.buttonVisNP()}}>New Project T</Button></Link> */}
    
      
<Link to="/ProjectIndex"><Button>My Projects</Button></Link>
<Link to="/ProjectCreate"><Button>New Project</Button></Link>
<Link to="/MaterialIndex"><Button>My Materials</Button></Link>
<Link to="/MaterialCreate"><Button>New Material</Button></Link>
<Link to="/UserIndex"><Button>User Info</Button></Link>

     
      <div>
        <Switch>
        
         <Route exact path="/ProjectIndex"><ProjectIndex token={this.props.token} /></Route>
         <Route exact path="/MaterialIndex"><MaterialIndex token={this.props.token} /></Route>
         <Route exact path="/ProjectCreate"><ProjectCreate toggleComponent={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/></Route>
         <Route exact path="/MaterialCreate"><MaterialCreate toggleComponent={this.toggleComponent} fetchMaterials={this.fetchMaterials} token={this.props.token}/></Route>
         <Route exact path="/UserIndex"><UserIndex token={this.props.token} /></Route>
              
        </Switch>
      </div>
      </Router>
    
    </div>
  );
}
}
