import React, { Component } from 'react';
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';


interface IProps {
    fetchMaterials: (fetchMaterials: string) => string,
    materialsToUpdate: (materialsToUpdate: string) => string,
    updateOff: (updateOff: boolean) => boolean
    // token: (token: string) => void
    
}

interface IState {
    editMaterialName: string,
    editQuantity: number,
    editCostPerItem: number,
    editColor: string, 
    editSize: number,
    editSource: string,
    editStorageLocation: string,
    editDescription: string,
    editNotes: string  
    
}

export default class MaterialsEdit extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            editMaterialName: this.props.materialsToUpdate.materialName,
            editQuantity: this.props.materialsToUpdate.quantity, 
            editCostPerItem: this.props.materialsToUpdate.costPerItem,
            editColor: this.props.materialsToUpdate.color,
            editSize: this.props.materialsToUpdate.size,
            editSource: this.props.materialsToUpdate.source,
            editStorageLocation: this.props.materialsToUpdate.storageLocation,
            editDescription: this.props.materialsToUpdate.description,
            editNotes: this.props.materialsToUpdate.notes
                      
        };
    }


    handleSubmit = (event, materials) => {
        event.preventDefault();
        fetch(`http://localhost:3000/materials/update/${this.props.materialsToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({materials: {materialName: this.state.editMaterialName,
                 editQuantity: this.state.editQuantity,
                  costPerItem: this.state.editCostPerItem,
                   color: this.state.editColor,
                    size: this.state.editSize,
                     source: this.state.source,
                      storageLocation: this.state.editStorageLocation,
                       description: this.state.description,
                        notes: this.state.notes }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then((res) => {
            console.log(res)            
            this.props.updateOff()
            this.props.fetchMaterials();
        })
    }

    render(){
    return(
        <>
        <h3>Edit Material</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="materialName" sm={2}>Material Name</Label>
        <Col md={5}>
                
                <Input id="materialName" type="text" name="materialName" value={this.state.editMaterialName} placeholder="Material Name" onChange={(e) => this.setState({editMaterialName: e.target.value})}/>
            
            </Col>
            </FormGroup>
            <Row form>
        <Col md={3}>
            <FormGroup>
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="text"name="quantity" value={this.state.editQuantity} placeholder="Quantity" onChange={(e) => this.setState({editQuantity: e.target.value})}/>
            </FormGroup>
            </Col>
            <Col md={2}> 
            <FormGroup>
                <Label htmlFor="color">Color</Label>
                <Input id="color" type="text"name="color" value={this.state.editColor} placeholder="Color" onChange={(e) => this.setState({editColor: e.target.value})}/>
            </FormGroup>
      </Col>
            <Col md={2}> 
            <FormGroup>
                <Label htmlFor="costPerItem">Cost per Item</Label>
                <Input id="costPerItem" type="number"name="costPerItem" value={this.state.editCostPerItem} placeholder="Cost per Item" onChange={(e) => this.setState({editCostPerItem: e.target.value})}/>
            </FormGroup>
      </Col>
      <Col md={2}>
      
      <FormGroup>
                <Label htmlFor="size">Size</Label>
                <Input id="size" type="text"name="size" value={this.state.editSize} placeholder="Size" onChange={(e) => this.setState({editSize: e.target.value})}/>
            </FormGroup>
            </Col>
            </Row>


            
            <Row form>
            <Col md={1}>
            <FormGroup>
                <Label htmlFor="source">Source</Label>
                <Input id="source" type="text"name="source" value={this.state.editSource} placeholder="Source" onChange={(e) => this.setState({editSource: e.target.value})}/>
            </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
                <Label htmlFor="storageLocation">Storage Location</Label>
                <Input id="storageLocation" type="text"name="storageLocation" value={this.state.editStorageLocation} placeholder="Storage Location" onChange={(e) => this.setState({editStorageLocation: e.target.value})}/>
            </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Input id="description" type="text"name="description" value={this.state.editDescription} placeholder="Description" onChange={(e) => this.setState({editDescription: e.target.value})}/>
            </FormGroup>
            </Col>
            <Col md={3}>
            <FormGroup>
                <Label htmlFor="notes">Notes</Label>
                <Input id="notes" type="text"name="notes" value={this.state.editNotes} placeholder="Notes" onChange={(e) => this.setState({editNotes: e.target.value})}/>
            </FormGroup>
            </Col>
            </Row>
           
            <Button type="submit">Save</Button>
            {/* <Button onClick={this.props.toggleComponent}>Cancel</Button> */}
            <Button toggleComponent={this.props.toggleComponent}>Cancel</Button>
            
            </Form>
       </>    
    )
}
}
