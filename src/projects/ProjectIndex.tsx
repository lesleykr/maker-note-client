import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import ProjectCreate from './ProjectCreate';
import ProjectsTable from './ProjectsTable';
import ProjectsEdit from './ProjectEdit';
import ProjectView from './ProjectView';
interface IProps {
    // token: (token: string) => string,
    
}

interface IState {
    projects: string,
    updateActive: boolean, 
    projectsToUpdate: object
}

export default class ProjectIndex extends Component <IProps, IState>{
  static fetchProjects: (fetchProjects: string) => string;
    constructor(props: IProps) {
        super(props)
        this.state = {
            projects: [],
            updateActive: false,
            projectsToUpdate: {},   
            isComponentVisible: false          
        };
    }

    fetchProjects = () => {
        fetch('http://localhost:3000/projects/mine', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then( (res) => res.json())
            .then((projectsData) => {
                this.setState({projects: projectsData})
                console.log(projectsData);
            })
    }

editUpdateProjects = (projects) => {
    this.setState({projectsToUpdate: projects});
    console.log(projects);
}

updateOn = () => {
    this.setState({updateActive: true});
}

updateOff = () => {
    this.setState({updateActive: false});
}

toggleComponent = () => { 
    console.log("component toggled");
	this.setState({ 
        isComponentVisible: !this.state.isComponentVisible 
    }); 
} 

componentDidMount(){
    console.log('mounted');
    this.fetchProjects();
}

render(){
    return(
        <div>
    
    {this.state.projects == 0 ? (<ProjectCreate toggleComponent={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/>) : (this.state.isComponentVisible ? (<ProjectCreate toggleComponent={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/>)  : 
                    (this.state.updateActive ? (<ProjectsEdit projectsToUpdate={this.state.projectsToUpdate} updateOff={this.updateOff} token={this.props.token} fetchProjects={this.fetchProjects}/>) : (<div>  <Button onClick={this.toggleComponent}>New Project</Button> <ProjectsTable projects={this.state.projects} editUpdateProjects={this.editUpdateProjects} updateOn={this.updateOn} fetchProjects={this.fetchProjects} token={this.props.token} /> </div> )))}
               
                
           
        </div>        
    )
}
}

//PROJECT VIEW RENDER - DIDN'T COMPLETELY WORK
// render(){
//     return(
//         <div>
            
//                     {/* <Button onClick={() =><ProjectCreate fetchProjects={this.fetchProjects} token={this.props.token}/>}> New Project</Button> */}
                    
//      <Button onClick={this.toggleComponent}>  
//          New Project 
//       </Button> 
//      {this.state.isComponentVisible ? <ProjectCreate onClick={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/>  : 
//                     this.state.updateActive ? <ProjectView onClick={this.toggleComponent} projectsToUpdate={this.state.projectsToUpdate} updateOff={this.updateOff} token={this.props.token} fetchProjects={this.fetchProjects}/> : 
//                     <ProjectsTable projects={this.state.projects} editUpdateProjects={this.editUpdateProjects} updateOn={this.updateOn} fetchProjects={this.fetchProjects}
//                     token={this.props.token} />}
               
                
           
//         </div>        
//     )
// }
// }