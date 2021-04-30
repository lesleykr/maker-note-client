import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const ProjectCreate = (props) => {
    const [projectName, setProjectName] = useState('');
    const [medium, setMedium] = useState('');
    const [totalMaterialCost, setTotalMaterialCost] = useState('');

    return(
       <>
        <h3>Enter a New Project</h3>
        <Form>
            <FormGroup>
                <Label htmlFor="projectName"/>
                <Input name="projectName" value={projectName}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="medium"/>
                <Input name="medium" value={medium}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="totalMaterialCost" />   
                <Input name="totalMaterialCost" value={totalMaterialCost}/>
            </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
       </>
    )
}

export default ProjectCreate;