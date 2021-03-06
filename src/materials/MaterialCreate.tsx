import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row, } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import APIURL from '../helpers/environment'

const Heading = styled.h1`
text-align: center;
width: 50%;
margin: auto;
font-family: 'Tempus Sans ITC';
color: #b820d1;
margin-bottom: 40px;

`
const SForm = styled(Form)`
margin: auto;
width: 50%;
margin-top: 50px;
padding-left: 70px;
padding-top: 70px;
padding-bottom: 70px;
background-color: #f8f8f8;
border: #5e4ac7 1px solid;
`
const Bdiv = styled.div`
margin: auto;
width: 50%;
text-align: center;
margin-top: 20px;
`
const SButton = styled(Button)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;

`
const CButton = styled(Button)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;
`
interface IProps {
    token: string
}

interface IState {
    materialName: string,
    quantity: string,
    costPerItem: string,
    color: string,
    size: string,
    source: string,
    storageLocation: string,
    description: string,
    notes: string,
    redirectMI: boolean
}

export default class MaterialCreate extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            materialName: '',
            quantity: "",
            costPerItem: "",
            color: '',
            size: "",
            source: "",
            storageLocation: "",
            description: "",
            notes: "",
            redirectMI: false,
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        if (!this.state.materialName) {
            alert("Please enter the name of your material.");
        } else {
            fetch(`${APIURL}/materials/create`, {
                method: 'POST',
                body: JSON.stringify({ materials: this.state }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                })
            }).then((res) => res.json())
                .then((materialsData) => {
                    console.log(materialsData);
                    this.setState({
                        materialName: '',
                        quantity: "",
                        costPerItem: "",
                        color: '',
                        size: "",
                        source: "",
                        storageLocation: "",
                        description: "",
                        notes: "",
                        redirectMI: true
                    })
                })
        }
    }

    render() {
        if (this.state.redirectMI) {
            return <Redirect to="/MaterialIndex" />
        }
        return (
            <SForm onSubmit={this.handleSubmit}>
                <Heading>Enter a New Material</Heading>
                <Col md={5}>
                    <FormGroup>
                        <Label for="materialName">Material Name</Label>
                        <Input id="materialName" type="text" name="materialName" value={this.state.materialName} placeholder="Material Name" onChange={(e) => this.setState({ materialName: e.target.value })} />
                    </FormGroup>
                </Col>
                <Row form>
                    <Col md={2}>
                        <FormGroup>
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input id="quantity" type="number" name="quantity" value={this.state.quantity} placeholder="Quantity" onChange={(e) => this.setState({ quantity: e.target.value })} />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label htmlFor="color">Color</Label>
                            <Input id="color" type="text" name="color" value={this.state.color} placeholder="Color" onChange={(e) => this.setState({ color: e.target.value })} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label htmlFor="costPerItem">Cost per Item</Label>
                            <Input id="costPerItem" type="text" name="costPerItem" value={this.state.costPerItem} placeholder="Cost per Item" onChange={(e) => this.setState({ costPerItem: e.target.value })} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label htmlFor="size">Size</Label>
                            <Input id="size" type="text" name="size" value={this.state.size} placeholder="Size" onChange={(e) => this.setState({ size: e.target.value })} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Label htmlFor="source">Source</Label>
                            <Input id="source" type="text" name="source" value={this.state.source} placeholder="Source" onChange={(e) => this.setState({ source: e.target.value })} />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label htmlFor="storageLocation">Storage Location</Label>
                            <Input id="storageLocation" type="text" name="storageLocation" value={this.state.storageLocation} placeholder="Storage Location" onChange={(e) => this.setState({ storageLocation: e.target.value })} />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input id="description" type="text" name="description" value={this.state.description} placeholder="Description" onChange={(e) => this.setState({ description: e.target.value })} />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label htmlFor="notes">Notes</Label>
                            <Input id="notes" type="textarea" name="notes" value={this.state.notes} placeholder="Notes" onChange={(e) => this.setState({ notes: e.target.value })} />
                        </FormGroup>
                    </Col>
                </Row>
                <Bdiv>
                    <SButton type="submit">Save</SButton>
                    <Link to="/MaterialIndex"><CButton>Cancel</CButton></Link>
                </Bdiv>
            </SForm>
        )
    }
}
