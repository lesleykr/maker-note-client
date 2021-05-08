import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import ProjectCreate from './ProjectCreate';
import ProjectsTable from './ProjectsTable';
import ProjectsEdit from './ProjectEdit';
import ProjectView from './ProjectView';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

interface IProps {
    token: string
}

interface Project{
        projectName: string,
        dateStarted: string,
        dateFinished: string,
        medium: string,
        totalMaterialCost: string,
        forSale: boolean,
        dateSold: string,
        price: string,
        storeSoldAt: string,
        notes: string,
        id: number
}

interface IState {
    projects: [],
    updateActive: boolean,
    projectsToView: object,
    isComponentVisible: boolean,
    isActive: boolean
    projectsToUpdate: {
        projectName: string,
        dateStarted: string,
        dateFinished: string,
        medium: string,
        totalMaterialCost: string,
        forSale: boolean,
        dateSold: string,
        price: string,
        storeSoldAt: string,
        notes: string,
        id: number
        
    }


}

export default class ProjectIndex extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            projects: [],
            updateActive: false,
            projectsToUpdate: {
                projectName: "",
                dateStarted: "",
                dateFinished: "",
                medium: "",
                totalMaterialCost: "",
                forSale: false,
                dateSold: "",
                price: "",
                storeSoldAt: "",
                notes: "",
                id: Infinity
            },
            isComponentVisible: false,
            projectsToView: {},
            isActive: false

        };
    }

    fetchProjects = () => {
        fetch('http://localhost:3000/projects/mine', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => res.json())
        .then((projectsData) => {
            this.setState({ projects: projectsData })           
            console.log(projectsData);
            })
           
    }

    editUpdateProjects = (projects: Project) => {
        this.setState({ projectsToUpdate: projects });
        console.log(projects);
    }

    viewProjects = (projects: object) => {
        this.setState({ projectsToView: projects });
        console.log(projects);
    }

    updateOn = () => {
        this.setState({ updateActive: true });
    }

    updateOff = () => {
        this.setState({ updateActive: false });
    }

    handleHide = () => {
        this.setState({ isActive: true })
    }

    // toggleComponent = () => { 
    //     console.log("component toggled");
    // 	this.setState({ 
    //         isComponentVisible: !this.state.isComponentVisible 
    //     }); 
    // } 

    componentDidMount() {
        console.log('mounted');
        this.fetchProjects();
    }

    render() {
        return (
            <div>

                  
             
            {this.state.projects == null ? (<Link to="/ProjectCreate"><Button>New Project</Button></Link>) : (this.state.updateActive ? <ProjectsEdit projectsToUpdate={this.state.projectsToUpdate} updateOff={this.updateOff} token={this.props.token} fetchProjects={this.fetchProjects}/> : <ProjectsTable projects={this.state.projects} editUpdateProjects={this.editUpdateProjects} updateOn={this.updateOn} fetchProjects={this.fetchProjects} token={this.props.token} />) }

</div>        
        )
    }
}

//PROJECT VIEW TERNARY (NOT WORKING):
// {this.state.projects == 0 ? (<Link to="/ProjectCreate"><Button>New Project</Button></Link>) : (this.state.updateActive ? (this.state.projects.map((project, index) => (
//     <ProjectView key={index} projectName={project.projectName}  />
//   ))) : <ProjectsTable projects={this.state.projects} editUpdateProjects={this.editUpdateProjects} updateOn={this.updateOn} fetchProjects={this.fetchProjects} token={this.props.token} />) }

//  MAPPING FOR PROJECT VIEW (NOT WORKING):


{/* {this.state.projects.map((project, index) => (
          <ProjectView key={index} projectName={project.projectName} />
        ))} */}

{/* 
{options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))} */}

{/* <ProjectsEdit toggleComponent={this.toggleComponent} projectsToUpdate={this.state.projectsToUpdate} updateOff={this.updateOff} token={this.props.token} fetchProjects={this.fetchProjects}/> */ }


{/* 
               {this.state.updateActive ? <Link to="/ProjectsEdit"><ProjectsEdit projectsToUpdate={this.state.projectsToUpdate}
               updateOff={this.updateOff} token={this.props.token} fetchProjects={this.fetchProjects}/></Link> : <></>} */}

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

//ORIGINAL CRAZY LONG TERNARY

{/* {this.state.projects == 0 ? (<ProjectCreate toggleComponent={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/>) : (this.state.isComponentVisible ? (<ProjectCreate toggleComponent={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/>)  : 
                    (this.state.updateActive ? (<ProjectsEdit toggleComponent={this.toggleComponent}projectsToUpdate={this.state.projectsToUpdate} updateOff={this.updateOff} token={this.props.token} fetchProjects={this.fetchProjects}/>) : (<div>  <Button onClick={this.toggleComponent}>New Project</Button> <ProjectsTable projects={this.state.projects} editUpdateProjects={this.editUpdateProjects} updateOn={this.updateOn} fetchProjects={this.fetchProjects} token={this.props.token} /> </div> )))} */}