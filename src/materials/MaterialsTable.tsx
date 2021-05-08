import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';

interface IProps {
    materials: (materials: string) => string,
    editUpdateMaterials: (editUpdateMaterials: string) => void,
    updateOn: (updateOn: boolean) => boolean,
    fetchMaterials: (fetchMaterials: string) => string
}

interface IState {
    sortType: string,
    
}
export default class MaterialsTable extends Component <IProps, {}>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            sortType: "",
            
        }


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


// materials.sort(function (a,b) {
//     let nameA = a.material.materialName.toUpperCase();
//     var nameB = b.material.materialName.toUpperCase();
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//     return 0;
// })



// materialsMapper() {
//     return this.props.materials.sort((a, b) => {a[this.state.sortType].localeCompare(b[this.state.sortType])}).map((material, index) => {


materialsMapper() {
    return this.props.materials.sort((a, b) => a.materialName.localeCompare(b.materialName)).map((material, index) => {
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

        <select onChange={(e) => this.setState({sortType: e.target.value})}> 
        <option value="materialName">Material Name</option>
        <option value="color">color</option>
        <option value="quantity">quantity</option>
      </select>

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