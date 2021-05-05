import React, { Component } from 'react';
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link} from "react-router-dom";

interface IProps {
    fetchProjects: (fetchProjects: string) => string,
    projectsToUpdate: (projectsToUpdate: string) => string,
    updateOff: (updateOff: boolean) => boolean,
    // token: (token: string) => void
      
}

interface IState {
    
    editProjectName: string,
    editDateStarted: number,
    editDateFinished: number,
    editMedium: string, 
    editTotalMaterialCost: number,
    editForSale: boolean,
    editDateSold: number,
    editPrice: number,
    editStoreSoldAt: string,
    editNotes: string
    
}

export default class ProjectsEdit extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            editProjectName: this.props.projectsToUpdate.projectName,
            editDateStarted: this.props.projectsToUpdate.dateStarted,
            editDateFinished: this.props.projectsToUpdate.dateFinished,
            editMedium: this.props.projectsToUpdate.medium,
            editTotalMaterialCost: this.props.projectsToUpdate.totalMaterialCost,            
            editForSale: this.props.projectsToUpdate.forSale,
            editDateSold: this.props.projectsToUpdate.dateSold,
            editPrice: this.props.projectsToUpdate.price,
            editStoreSoldAt: this.props.projectsToUpdate.storeSoldAt,
            editNotes: this.props.projectsToUpdate.notes
        };
    }


    handleSubmit = (event, projects) => {
        event.preventDefault();
        fetch(`http://localhost:3000/projects/update/${this.props.projectsToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({projects: {projectName: this.state.editProjectName, dateStarted: this.state.editDateStarted, dateFinished: this.state.editDateFinished, medium: this.state.editMedium, editTotalMaterialCost: this.state.editTotalMaterialCost, forSale: this.state.editForSale, dateSold: this.state.editDateSold, price: this.state.editPrice, storeSoldAt: this.state.editStoreSoldAt, notes: this.state.editNotes}}),
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
       <>
        <h3>Edit Project</h3>
        <Form onSubmit={this.handleSubmit} >       
       
            <FormGroup>
            <Label for="projectName" sm={2}>Project Name</Label>
        <Col md={5}>
                
                <Input id="projectName" type="text" name="projectName" value={this.state.editProjectName} placeholder="Project Name" onChange={(e) => this.setState({editProjectName: e.target.value})}/>
            
            </Col>
            </FormGroup>
            <Row form>
        <Col md={3}>
            <FormGroup>
                <Label htmlFor="medium">Medium</Label>
                <Input id="medium" type="text"name="medium" value={this.state.editMedium} placeholder="Medium" onChange={(e) => this.setState({editMedium: e.target.value})}/>
            </FormGroup>
            </Col>
            <Col md={2}> 
            <FormGroup>
        <Label for="dateStarted">Date Started</Label>
        <Input
          type="date"
          name="dateStarted"
          id="dateStarted"
          placeholder="Date Started"
          value={this.state.editDateStarted} onChange={(e) => this.setState({editDateStarted: e.target.value})}/>
      </FormGroup>
      </Col>
            <Col md={2}> 
      <FormGroup>
        <Label for="dateFinished">Date Finished</Label>
        <Input
          type="date"
          name="dateFinished"
          id="dateFinished"
          placeholder="Date Finished"
          value={this.state.editDateFinished} onChange={(e) => this.setState({editDateFinished: e.target.value})}/>
      </FormGroup>
      </Col>
      <Col md={2}>
      
      <FormGroup>
                <Label htmlFor="totalMaterialCost">Total Material Cost</Label>   
                {<span>$</span>}<Input id="totalMaterialCost" type="number" placeholder="Total Material Cost" name="totalMaterialCost" value={this.state.editTotalMaterialCost} onChange={(e) => this.setState({editTotalMaterialCost: e.target.value})}/>
            </FormGroup>
            </Col>
            </Row>            
            <Row form>
            <Col md={1}>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="forSale" id="forSale" value={this.state.editForSale} onChange={(e) => this.setState({editForSale: e.target.value})}/> For Sale?
        </Label>
      </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
        <Label for="dateSold">Date Sold</Label>
        <Input
          type="date"
          name="dateSold"
          id="dateSold"
          placeholder="Date Sold"
          value={this.state.editDateSold} onChange={(e) => this.setState({editDateSold: e.target.value})}/>
      </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
                <Label htmlFor="price">Price</Label>   
                <Input id="price" type="number" placeholder="Price" name="price" value={this.state.editPrice} onChange={(e) => this.setState({editPrice: e.target.value})}/>
            </FormGroup>
            </Col>
            <Col md={3}>
            <FormGroup>
                <Label htmlFor="storeSoldAt">Store Sold At</Label>
                <Input id="storeSoldAt" type="text"name="storeSoldAt" value={this.state.editStoreSoldAt} placeholder="Store Sold At" onChange={(e) => this.setState({editStoreSoldAt: e.target.value})}/>
            </FormGroup>
            </Col>
            </Row>
            <FormGroup>
                <Label htmlFor="notes">Notes</Label>
                <Input id="notes" type="text"name="notes" value={this.state.editNotes} placeholder="Notes" onChange={(e) => this.setState({editNotes: e.target.value})}/>
            </FormGroup>

            <Button type="submit" >Save</Button>
            <Button toggleComponent={this.props.toggleComponent}>Cancel</Button>
        </Form>
       </>    
    )
}
}


{/* <h3>Edit Project</h3>
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
                </Form> */}