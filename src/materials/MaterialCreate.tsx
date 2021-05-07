import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row, } from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';

interface IProps {
    fetchMaterials: (fetchMaterials: string) => string,
    
}

interface IState {
    materialName: string,
    quantity: number, 
    color: string
}

export default class MaterialCreate extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            materialName: '',
            quantity: 0,
            color: '' ,
            redirectMI: false,           
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        if (!this.state.materialName) {
            alert("Please enter the name of your material.");
          } else {
        fetch('http://localhost:3000/materials/create', {
            method: 'POST',
            body: JSON.stringify({materials: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then((res) => res.json())
        .then((materialsData) => {
            console.log(materialsData);            
            // this.props.fetchMaterials();
            this.setState({
                materialName: '',
                quantity: 0,
                color: '',
                redirectMI: true
            })
        })  
    }  
    }

    render() {
        if (this.state.redirectMI) {
            return <Redirect to="/MaterialIndex" />
        }
    return(
       <>
        <h3>Enter a New Material</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="materialName" sm={2}>Material Name</Label>
        <Col md={5}>
                
                <Input id="materialName" type="text" name="materialName" value={this.state.materialName} placeholder="Material Name" onChange={(e) => this.setState({materialName: e.target.value})}/>
            
            </Col>
            </FormGroup>
            <Row form>
        <Col md={3}>
            <FormGroup>
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="text"name="quantity" value={this.state.quantity} placeholder="Quantity" onChange={(e) => this.setState({quantity: e.target.value})}/>
            </FormGroup>
            </Col>
            <Col md={2}> 
            <FormGroup>
                <Label htmlFor="color">Color</Label>
                <Input id="color" type="text"name="color" value={this.state.color} placeholder="Color" onChange={(e) => this.setState({color: e.target.value})}/>
            </FormGroup>
      </Col>
            <Col md={2}> 
            <FormGroup>
                <Label htmlFor="costPerItem">Cost per Item</Label>
                <Input id="costPerItem" type="number"name="costPerItem" value={this.state.costPerItem} placeholder="Cost per Item" onChange={(e) => this.setState({costPerItem: e.target.value})}/>
            </FormGroup>
      </Col>
      <Col md={2}>
      
      <FormGroup>
                <Label htmlFor="size">Size</Label>
                <Input id="size" type="text"name="size" value={this.state.size} placeholder="Size" onChange={(e) => this.setState({size: e.target.value})}/>
            </FormGroup>
            </Col>
            </Row>


            
            <Row form>
            <Col md={1}>
            <FormGroup>
                <Label htmlFor="source">Source</Label>
                <Input id="source" type="text"name="source" value={this.state.source} placeholder="Source" onChange={(e) => this.setState({source: e.target.value})}/>
            </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
                <Label htmlFor="storageLocation">Storage Location</Label>
                <Input id="storageLocation" type="text"name="storageLocation" value={this.state.storageLocation} placeholder="Storage Location" onChange={(e) => this.setState({storageLocation: e.target.value})}/>
            </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Input id="description" type="text"name="description" value={this.state.description} placeholder="Description" onChange={(e) => this.setState({description: e.target.value})}/>
            </FormGroup>
            </Col>
            <Col md={3}>
            <FormGroup>
                <Label htmlFor="notes">Notes</Label>
                <Input id="notes" type="text"name="notes" value={this.state.notes} placeholder="Notes" onChange={(e) => this.setState({notes: e.target.value})}/>
            </FormGroup>
            </Col>
            </Row>
           
            <Button type="submit">Save</Button>
            {/* <Button onClick={this.props.toggleComponent}>Cancel</Button> */}
            <Link to="/MaterialIndex"><Button>Cancel</Button></Link>
        </Form>


       </>
    )
}
}
