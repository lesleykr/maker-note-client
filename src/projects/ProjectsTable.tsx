import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {Link} from "react-router-dom";

interface IProps {
    projects: (projects: string) => string,
    editUpdateProjects: (editUpdateProjects: string) => void,
    updateOn: (updateOn: boolean) => boolean,
    fetchProjects: (fetchProjects: string) => string
}

export default class ProjectsTable extends Component <IProps, {}>{
    constructor(props: IProps) {
        super(props)

    }

   deleteProject = (project: any) => {
        fetch(`http://localhost:3000/projects/delete/${project.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(() => this.props.fetchProjects())
    }

    projectsMapper() {
        return this.props.projects.map((project, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{project.dateStarted}</th>                    
                    <td>{project.dateFinished}</td>                    
                    <td>{project.projectName}</td>
                    <td>{project.medium}</td>
                    
                    
                    <td>
                        
                        <Button color="warning" onClick={() => {this.props.editUpdateProjects(project); this.props.updateOn()}}>Update</Button>
                      
                        <Button color="danger" onClick={() => {this.deleteProject(project)}}>Delete</Button>

                    </td>
                </tr>
            )
        })
        
    }
    render(){
        return(
        <>
        <h3>My Projects</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>Date Started</th>
                    <th>Date Finished</th>
                    <th>Project Name</th>
                    <th>Medium</th>                    
                </tr>
            </thead>
            <tbody>
            {this.projectsMapper()}
            </tbody>
        </Table>

        </>
    )
}
}