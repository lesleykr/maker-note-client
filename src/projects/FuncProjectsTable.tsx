import React from 'react';
import {Table, Button} from 'reactstrap';

const ProjectsTable = (props: any) => {

    const deleteProject = (project: any) => {
        fetch(`http://localhost:3000/projects/delete/${project.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchProjects())
    }

    const projectsMapper = () => {
        return props.projects.map((project, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{project.id}</th>
                    <td>{project.projectName}</td>
                    <td>{project.medium}</td>
                    <td>{project.totalMaterialCost}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateProjects(project); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteProject(project)}}>Delete</Button>
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