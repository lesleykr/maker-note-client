import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProjectCreate from './ProjectCreate';
import ProjectsTable from './ProjectsTable';
import ProjectsEdit from './ProjectEdit';

interface IProps {
    // token: (token: string) => string,
    
}

interface IState {
    projects: string,
    updateActive: boolean, 
    projectsToUpdate: object
}

export default class ProjectIndex extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            projects: [],
            updateActive: false,
            projectsToUpdate: {},            
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

componentDidMount(){
    console.log('mounted');
    this.fetchProjects();
}


   render(){
    return(
        <Container>
            <Row>
                <Col md="3">
                    <ProjectCreate fetchProjects={this.fetchProjects} token={this.props.token} />
                </Col>
                <Col md="9">
                    <ProjectsTable projects={this.state.projects} editUpdateProjects={this.editUpdateProjects} updateOn={this.updateOn} fetchProjects={this.fetchProjects}
                    token={this.props.token} />
                </Col>
                {this.state.updateActive ? <ProjectsEdit projectsToUpdate={this.state.projectsToUpdate} updateOff={this.updateOff} token={this.props.token} fetchProjects={this.fetchProjects}/> : <></>}
            </Row>
        </Container>        
    )
}
}
