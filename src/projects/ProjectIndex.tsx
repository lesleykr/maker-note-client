import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProjectCreate from './ProjectCreate';
import ProjectsTable from './ProjectsTable';

const ProjectIndex = (props) => {
    const [projects, setProjects] = useState([]);

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
                    <ProjectsTable projects={projects} fetchProjects={fetchProjects}
                    token={props.token} />
                </Col>
            </Row>
        </Container>        
    )
}

export default ProjectIndex;