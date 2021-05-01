import React from 'react';
import {Table, Button} from 'reactstrap';

const ProjectsTable = (props) => {

    const deleteProject = (projects) => {
        fetch('http://localhost:3000/projects/${projects.id}', {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchProjects())
    }

    const projectsMapper = () => {
        return props.projects.map((projects, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{projects.id}</th>
                    <td>{projects.projectName}</td>
                    <td>{projects.medium}</td>
                    <td>{projects.totalMaterialCost}</td>
                    <td>
                        <Button color="warning">Update</Button>
                        <Button color="danger" onClick={() => {deleteProject(projects)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
        
    }
        return(
        <>
        <h3>My Projects</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Medium</th>
                    <th>Total Material Cost</th>
                </tr>
            </thead>
            <tbody>
            {projectsMapper()}
            </tbody>
        </Table>

        </>
    )
}

export default ProjectsTable