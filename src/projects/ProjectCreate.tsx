import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

interface IProps {
    fetchProjects: (fetchProjects: string) => string,
    
}

interface IState {
    projectName: string,
    medium: string, 
    totalMaterialCost: number
}

export default class ProjectCreate extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectName: '',
            medium: '',
            totalMaterialCost: 0,            
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:3000/projects/create', {
            method: 'POST',
            body: JSON.stringify({projects: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then((res) => res.json())
        .then((projectsData) => {
            console.log(projectsData);            
            this.props.fetchProjects();
            this.setState({
            projectName: '',
            medium: '',
            totalMaterialCost: 0,
            })
        })    
    }

    render() {

    return(
       <>
        <h3>Enter a New Project</h3>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label htmlFor="projectName"/>
                <Input id="projectName" type="text" name="projectName" value={this.state.projectName} placeholder="Project Name" onChange={(e) => this.setState({projectName: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="medium"/>
                <Input id="medium" type="text"name="medium" value={this.state.medium} placeholder="Medium" onChange={(e) => this.setState({medium: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="totalMaterialCost" />   
                <Input id="totalMaterialCost" type="number" name="totalMaterialCost" value={this.state.totalMaterialCost} onChange={(e) => this.setState({totalMaterialCost: e.target.value})}/>
            </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
       </>
    )
}
}
