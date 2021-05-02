import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';

interface IProps {
    materials: (materials: string) => string,
    editUpdateMaterials: (editUpdateMaterials: string) => void,
    updateOn: (updateOn: boolean) => boolean,
    fetchMaterials: (fetchMaterials: string) => string
}

export default class MaterialsTable extends Component <IProps, {}>{
    constructor(props: IProps) {
        super(props)

    }

   deleteMaterial = (material: any) => {
        fetch(`http://localhost:3000/materials/delete/${material.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(() => this.props.fetchMaterials())
    }

    materialsMapper() {
        return this.props.materials.map((material, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{material.id}</th>
                    <td>{material.materialName}</td>
                    <td>{material.color}</td>
                    <td>{material.quantity}</td>
                    <td>
                        
                        <Button color="warning" onClick={() => {this.props.editUpdateMaterials(material); this.props.updateOn()}}>Update</Button>

                        <Button color="danger" onClick={() => {this.deleteMaterial(material)}}>Delete</Button>

                    </td>
                </tr>
            )
        })
        
    }
    render(){
        return(
        <>
        <h3>My Materials</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Material Name</th>
                    <th>Color</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
            {this.materialsMapper()}
            </tbody>
        </Table>

        </>
    )
}
}