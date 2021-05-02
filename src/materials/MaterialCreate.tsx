import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
            color: ''            
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
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
            this.props.fetchMaterials();
            this.setState({
                materialName: '',
                quantity: 0,
                color: ''  
            })
        })    
    }

    render() {

    return(
       <>
        <h3>Enter a New Material</h3>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label htmlFor="materialName"/>
                <Input id="materialName" type="text" name="materialName" value={this.state.materialName} placeholder="Material Name" onChange={(e) => this.setState({materialName: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="color"/>
                <Input id="color" type="text"name="color" value={this.state.color} placeholder="color" onChange={(e) => this.setState({color: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="quantity" />   
                <Input id="quantity" type="number" name="quantity" value={this.state.quantity} onChange={(e) => this.setState({quantity: e.target.value})}/>
            </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
       </>
    )
}
}
