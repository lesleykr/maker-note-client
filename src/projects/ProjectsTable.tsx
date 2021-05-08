import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {Link} from "react-router-dom";

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

interface IProps {
    projects: Project[],
    editUpdateProjects: any,
    updateOn: () => void,
    fetchProjects: () => void,    
    token: string   
}

interface IState {
    sortType: string
    
}

export default class ProjectsTable extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            sortType: ""            
        }

    }

   deleteProject = (project: Project) => {
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
        return this.props.projects.map((project: Project, index: number) => {
            return(
                <tr key={index}>
                    <th scope="row">{project.dateStarted}</th>                    
                    <td>{project.dateFinished}</td>                    
                    <td>{project.projectName}</td>
                    <td>{project.medium}</td>
                    
                    
                    <td>
                        
                        {/* <Button color="warning" onClick={() => {this.props.viewProjects(project); this.props.updateOn()}}>View Project</Button> */}
    
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
        {/* <Link to="/ProjectCreate"><Button>New Project</Button></Link> */}
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