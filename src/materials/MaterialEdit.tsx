import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

interface IProps {
    fetchMaterials: (fetchMaterials: string) => string,
    materialsToUpdate: (materialsToUpdate: string) => string,
    updateOff: (updateOff: boolean) => boolean
    // token: (token: string) => void
    
}

interface IState {
    editMaterialName: string,
    editColor: string, 
    editQuantity: number
    
}

export default class MaterialsEdit extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            editMaterialName: this.props.materialsToUpdate.materialName,
            editColor: this.props.materialsToUpdate.color,
            editQuantity: this.props.materialsToUpdate.quantity            
        };
    }


    handleSubmit = (event, materials) => {
        event.preventDefault();
        fetch(`http://localhost:3000/materials/update/${this.props.materialsToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({materials: {materialName: this.state.editMaterialName, color: this.state.editColor, editQuantity: this.state.editQuantity}}),
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
        <Modal isOpen={true}>
            <ModalHeader>Edit A Material</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="materialName">Material Name:</Label>
                        <Input name="materialName" value={this.state.editMaterialName} onChange={(e) => this.setState({editMaterialName: e.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="color">Color:</Label>
                        <Input name="color" value={this.state.editColor} onChange={(e) => this.setState({editColor: e.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="quantity">Total Material Cost:</Label>
                        <Input name="quantity" value={this.state.editQuantity} onChange={(e) => this.setState({editQuantity: e.target.value})}/>
                    </FormGroup>
                    <Button type="submit">Update Material</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
}
