import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import ProjectsTable from './ProjectsTable';

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
            totalMaterialCost: null,
            isOpen: true,     
            forSale: true  
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
            totalMaterialCost: null,
            // isOpen: false,  
            })
        })  
    }

    close = () => this.setState({isOpen: !this.state.isOpen});

    render() {

    return(
       <>
        <h3>Enter a New Project</h3>
        <Form onSubmit={this.handleSubmit} >
        
       
            <FormGroup>
            <Label for="projectName" sm={2}>Project Name</Label>
        <Col md={5}>
                
                <Input id="projectName" type="text" name="projectName" value={this.state.projectName} placeholder="Project Name" onChange={(e) => this.setState({projectName: e.target.value})}/>
            
            </Col>
            </FormGroup>
            <Row form>
        <Col md={3}>
            <FormGroup>
                <Label htmlFor="medium">Medium</Label>
                <Input id="medium" type="text"name="medium" value={this.state.medium} placeholder="Medium" onChange={(e) => this.setState({medium: e.target.value})}/>
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
          value={this.state.dateStarted} onChange={(e) => this.setState({dateStarted: e.target.value})}/>
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
          value={this.state.dateFinished} onChange={(e) => this.setState({dateFinished: e.target.value})}/>
      </FormGroup>
      </Col>
      <Col md={2}>
      
      <FormGroup>
                <Label htmlFor="totalMaterialCost">Total Material Cost</Label>   
                {<span>$</span>}<Input id="totalMaterialCost" type="number" placeholder="Total Material Cost" name="totalMaterialCost" value={this.state.totalMaterialCost} onChange={(e) => this.setState({totalMaterialCost: e.target.value})}/>
            </FormGroup>
            </Col>
            </Row>


            
            <Row form>
            <Col md={1}>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="forSale" id="forSale" value={this.state.forSale} onChange={(e) => this.setState({forSale: e.target.value})}/> For Sale?
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
          value={this.state.dateSold} onChange={(e) => this.setState({dateSold: e.target.value})}/>
      </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
                <Label htmlFor="price">Price</Label>   
                <Input id="price" type="number" placeholder="Price" name="price" value={this.state.price} onChange={(e) => this.setState({price: e.target.value})}/>
            </FormGroup>
            </Col>
            <Col md={3}>
            <FormGroup>
                <Label htmlFor="storeSoldAt">Store Sold At</Label>
                <Input id="storeSoldAt" type="text"name="storeSoldAt" value={this.state.storeSoldAt} placeholder="Store Sold At" onChange={(e) => this.setState({storeSoldAt: e.target.value})}/>
            </FormGroup>
            </Col>
            </Row>
            <FormGroup>
                <Label htmlFor="notes">Notes</Label>
                <Input id="notes" type="text"name="notes" value={this.state.notes} placeholder="Notes" onChange={(e) => this.setState({notes: e.target.value})}/>
            </FormGroup>

            <Button type="submit" >Save</Button>
        </Form>
       </>
    )
}
}

// onClick={this.props.onClick}