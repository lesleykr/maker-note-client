import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import MaterialCreate from './MaterialCreate';
import MaterialsTable from './MaterialsTable';
import MaterialsEdit from './MaterialEdit';
import {Material} from '../Types';

interface IProps {
    token: string
}

interface IState {
    materials: [],
    updateActive: boolean, 
    isComponentVisible: boolean,
    isActive: boolean
    materialsToUpdate: {
        materialName: string,
        quantity: string,
        costPerItem: string,
        color: string,
        size: string,
        source: string,
        storageLocation: string,
        description: string,
        notes: string,
        id: number
    }
}

export default class MaterialIndex extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            materials: [],
            updateActive: false,
            isComponentVisible: false,            
            isActive: false,
            materialsToUpdate: {
                materialName: "",
                quantity: "",
                costPerItem: "",
                color: "",
                size: "",
                source: "",
                storageLocation: "",
                description: "",
                notes: "",
                id: Infinity
            }           
        };
    }

    componentDidMount(){
        console.log('mounted');
        this.fetchMaterials();
    }

    fetchMaterials = () => {
        fetch('http://localhost:3000/materials/mine', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then( (res) => res.json())
            .then((materialsData) => {
                this.setState({materials: materialsData})
                console.log(materialsData);
            })
    }

editUpdateMaterials = (materials: Material) => {
    this.setState({materialsToUpdate: materials});
    console.log(materials);
}

updateOn = () => {
    this.setState({updateActive: true});
}

updateOff = () => {
    this.setState({updateActive: false});
}




   render(){
    return(
        <Container>
            <Row>
                {/* <Col md="3">
                <MaterialCreate fetchMaterials={this.fetchMaterials} token={this.props.token} />
                </Col>
                <Col md="9">
                    <MaterialsTable materials={this.state.materials} editUpdateMaterials={this.editUpdateMaterials} updateOn={this.updateOn} fetchMaterials={this.fetchMaterials}
                    token={this.props.token} />
                </Col>
                {this.state.updateActive ? <MaterialsEdit materialsToUpdate={this.state.materialsToUpdate} updateOff={this.updateOff} token={this.props.token} fetchMaterials={this.fetchMaterials}/> : <></>} */}
                
                {(this.state.updateActive ? (<MaterialsEdit materialsToUpdate={this.state.materialsToUpdate} updateOff={this.updateOff} token={this.props.token} fetchMaterials={this.fetchMaterials}/>) : <MaterialsTable materials={this.state.materials} editUpdateMaterials={this.editUpdateMaterials} updateOn={this.updateOn} fetchMaterials={this.fetchMaterials} token={this.props.token} />) }


            </Row>
        </Container>        
    )
}
}

                   