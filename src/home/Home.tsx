import React, { Component } from 'react';
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
import { Button } from 'reactstrap';
import Sitebar from './Navbar';


interface IProps {
  // fetchProjects: (fetchProjects: string) => string,
  updateToken: (newToken: string) => void
  
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
<Link to="/ProjectIndex"><Button>My Projects</Button></Link>
<Link to="/ProjectCreate"><Button>New Project</Button></Link>
<Link to="/MaterialIndex"><Button>My Materials</Button></Link>
<Link to="/MaterialCreate"><Button>New Material</Button></Link>

     
      <div>
        <Switch>
        
         <Route exact path="/ProjectIndex"><ProjectIndex token={this.props.token} /></Route>
         <Route exact path="/MaterialIndex"><MaterialIndex token={this.props.token} /></Route>
         <Route exact path="/ProjectCreate"><ProjectCreate toggleComponent={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/></Route>
        
                
        </Switch>
      </div>
      </Router>
    
    </div>
  );
}
}
