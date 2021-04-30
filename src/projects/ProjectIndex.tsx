import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';

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

                </Col>
                <Col md="9">
                    <h2>Enter a Project to see a table</h2>
                </Col>
            </Row>
        </Container>        
    )
}

export default ProjectIndex;