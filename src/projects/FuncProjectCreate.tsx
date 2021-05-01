import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const ProjectCreate = (props) => {
    const [projectName, setProjectName] = useState('');
    const [medium, setMedium] = useState('');
    const [totalMaterialCost, setTotalMaterialCost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/projects/create', {
            method: 'POST',
            body: JSON.stringify({projects: {projectName: projectName, medium: medium, totalMaterialCost: totalMaterialCost}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((projectsData) => {
            console.log(projectsData);
            setProjectName('');
            setMedium('');
            setTotalMaterialCost('')
            props.fetchProjects();
        })    
    }

    return(
       <>
        <h3>Enter a New Project</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="projectName"/>
                <Input name="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="medium"/>
                <Input name="medium" value={medium} onChange={(e) => setMedium(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="totalMaterialCost" />   
                <Input name="totalMaterialCost" value={totalMaterialCost} onChange={(e) => setTotalMaterialCost(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
       </>
    )
}

export default ProjectCreate;