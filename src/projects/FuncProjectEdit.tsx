import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const ProjectsEdit = (props) => {
    const [editProjectName, setEditProjectName] = useState(props.projectsToUpdate.projectName);
    const [editMedium, setEditMedium] = useState(props.projectsToUpdate.medium);
    const [editTotalMaterialCost, setEditTotalMaterialCost] = useState(props.projectsToUpdate.EditTotalMaterialCost);

    const ProjectsUpdate = (event, projects) => {
        event.preventDefault();
        fetch(`http://localhost:3000/projects/update/${props.projectsToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({projects: {projectName: editProjectName, medium: editMedium, editTotalMaterialCost: editTotalMaterialCost}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchProjects();
            props.updateOff()
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit A Project</ModalHeader>
            <ModalBody>
                <Form onSubmit={ProjectsUpdate}>
                    <FormGroup>
                        <Label htmlFor="projectName">Project Name:</Label>
                        <Input name="projectName" value={editProjectName} onChange={(e) => setEditProjectName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="medium">Medium:</Label>
                        <Input name="medium" value={editMedium} onChange={(e) => setEditMedium(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="totalMaterialCost">Total Material Cost:</Label>
                        <Input name="totalMaterialCost" value={editTotalMaterialCost} onChange={(e) => setEditTotalMaterialCost(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update Project</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ProjectsEdit;