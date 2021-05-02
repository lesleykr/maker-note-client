import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

interface IProps {
    fetchProjects: (fetchProjects: string) => string,
    projectsToUpdate: (projectsToUpdate: string) => string,
    updateOff: (updateOff: boolean) => boolean
    // token: (token: string) => void
    
}

interface IState {
    editProjectName: string,
    editMedium: string, 
    editTotalMaterialCost: number
    
}

export default class ProjectEdit extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            editProjectName: this.props.projectsToUpdate.projectName,
            editMedium: this.props.projectsToUpdate.medium,
            editTotalMaterialCost: this.props.projectsToUpdate.totalMaterialCost            
        };
    }


    handleSubmit = (event, projects) => {
        event.preventDefault();
        fetch(`http://localhost:3000/projects/update/${this.props.projectsToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({projects: {projectName: this.state.editProjectName, medium: this.state.editMedium, editTotalMaterialCost: this.state.editTotalMaterialCost}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then((res) => {
            console.log(res)            
            this.props.updateOff()
            this.props.fetchProjects();
        })
    }

    render(){
    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit A Project</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="projectName">Project Name:</Label>
                        <Input name="projectName" value={this.state.editProjectName} onChange={(e) => this.setState({editProjectName: e.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="medium">Medium:</Label>
                        <Input name="medium" value={this.state.editMedium} onChange={(e) => this.setState({editMedium: e.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="totalMaterialCost">Total Material Cost:</Label>
                        <Input name="totalMaterialCost" value={this.state.editTotalMaterialCost} onChange={(e) => this.setState({editTotalMaterialCost: e.target.value})}/>
                    </FormGroup>
                    <Button type="submit">Update Project</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
}
