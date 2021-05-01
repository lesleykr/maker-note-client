import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProjectCreate from './ProjectCreate';
import ProjectsTable from './ProjectsTable';
import ProjectsEdit from './ProjectEdit';

const ProjectIndex = (props) => {
    const [projects, setProjects] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [projectsToUpdate, setProjectsToUpdate] = useState({});

    const fetchProjects = () => {
        fetch('http://localhost:3000/projects', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
            .then((projectsData) => {
                setProjects(projectsData)
                console.log(projectsData);
            })
    }

const editUpdateProjects = (projects) => {
    setProjectsToUpdate(projects);
    console.log(projects);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false);
}

    useEffect(() => {
        fetchProjects();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="3">
                    <ProjectCreate fetchProjects={fetchProjects} token={props.token} />
                </Col>
                <Col md="9">
                    <ProjectsTable projects={projects} editUpdateProjects={editUpdateProjects} updateOn={updateOn} fetchProjects={fetchProjects}
                    token={props.token} />
                </Col>
                {updateActive ? <ProjectsEdit projectsToUpdate={projectsToUpdate} updateOff={updateOff} token={props.token} fetchProjects={fetchProjects}/> : <></>}
            </Row>
        </Container>        
    )
}

export default ProjectIndex;