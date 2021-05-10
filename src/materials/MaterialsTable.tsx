import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {Material} from '../Types';
import styled from 'styled-components';

const Heading = styled.h1`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;


`
const Tdiv = styled.div`

width: 100vw;
`

const UButton = styled(Button)`
background-color: #5e4ac7;
color: #f6a73f;
margin-right: 2em;
margin-left: 2em;

`
const DButton = styled(Button)`
background-color: #5e4ac7;
color: #f6a73f;
`

const TD = styled.td`
color: #b820d1;
`
const TH = styled.th`
color: #5e4ac7;
`

interface IProps {
    materials: Material[],
    editUpdateMaterials: any,
    updateOn: () => void,
    fetchMaterials: () => void,
    token: string
      
}

interface IState {
    sortType: string  
}

export default class MaterialsTable extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            sortType: ""            
        }


    }

   deleteMaterial = (material: Material) => {
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
    return this.props.materials.sort((a, b) => a.materialName.localeCompare(b.materialName)).map((material: Material, index: number) => {
               return(
                <tr key={index}>
                    <th scope="row">{material.id}</th>
                    <TD>{material.materialName}</TD>
                    <TD>{material.color}</TD>
                    <TD>{material.quantity}</TD>
                    <td>
                        
                        <UButton onClick={() => {this.props.editUpdateMaterials(material); this.props.updateOn()}}>Update</UButton>

                        <DButton onClick={() => {this.deleteMaterial(material)}}>Delete</DButton>

                    </td>
                </tr>
            )
        })
        
    }
    render(){
        return(
        <Tdiv>
        <Heading>My Materials</Heading>
        <hr style={{ backgroundColor: "#5e4ac7" }}/>

         <Table striped >
            <thead>
                <tr>
                    <TH>#</TH>
                    <TH>Material Name</TH>
                    <TH>Color</TH>
                    <TH>Quantity</TH>
                </tr>
            </thead>
            <tbody>
            {this.materialsMapper()}
            </tbody>
        </Table>

        </Tdiv>
    )
}
}