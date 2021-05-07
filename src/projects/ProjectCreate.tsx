import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import ProjectsTable from './ProjectsTable';
import {Link, Redirect} from 'react-router-dom';
import ProjectIndex from './ProjectIndex';
import MaterialIndex from '../materials/MaterialIndex'

interface IProps {
    fetchProjects: (fetchProjects: object) => object,
    token: string,
    
}

interface IState {
   projectName: string,
   dateStarted: string,
   dateFinished: string,
   medium: string, 
   totalMaterialCost: string,
   forSale: boolean,
   dateSold: string,
   price: string,
   storeSoldAt: string,
   notes: string,
   isOpen: boolean,
   materials: object,
   redirectPI: boolean
}

export default class ProjectCreate extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectName: '',
            dateStarted: "",
            dateFinished: "",
            medium: '',
            totalMaterialCost: "",
            forSale: false,
            dateSold: "",
            price: "",
            storeSoldAt: '',
            notes: '',
            isOpen: true,
            redirectPI: false,
            materials: [],
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        if (!this.state.projectName) {
            alert("Please enter a name for your project.");
          } else {
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
            // this.props.fetchProjects();
            this.setState({
            projectName: '',
            dateStarted: "",
            dateFinished: "",
            medium: '',
            totalMaterialCost: "",
            forSale: false,
            dateSold: "",
            price: "",
            storeSoldAt: '',
            notes: '', 
            redirectPI: true            
            })
            // this.props.toggleComponent()
                    
        
        }) 
    } 
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

    close = () => this.setState({isOpen: !this.state.isOpen});

    componentDidMount(){
        console.log('mounted');
        this.fetchMaterials();
    }

    // materialsMapper() {
    //     return this.state.materials.map((material, index) => {
    //         return(
    //             <tr key={index}>
    //                 <th scope="row">{material.id}</th>
    //                 <td>{material.materialName}</td>
    //                 <td>{material.color}</td>
    //                 <td>{material.quantity}</td>
    //                 <td>
                        
                       

    //                 </td>
    //             </tr>
    //         )
    //     })
    // }
    render() {

        const { materials } = this.state;

        let materialsList = materials.length > 0
            && materials.map((item: any, i: number) => {
          return (
            <option key={i} value={item.id}>{item.materialName}</option>
          )
        }, this);

        
             if (this.state.redirectPI) {
            return <Redirect to="/ProjectIndex" />
        }
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
      </Row>
      <Row form>
      <Col md={6}>
<FormGroup>
  <Label for="exampleSelectMulti">Select Materials</Label>

  <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>

  </Input>

  <div>
      <select>{materialsList}</select>
  </div>
</FormGroup>
</Col>
</Row>
<Row form>
      <Col md={2}>
      
      <FormGroup>
                <Label htmlFor="totalMaterialCost">Total Material Cost</Label>   
                {<span>$</span>}<Input id="totalMaterialCost" type="number" placeholder="Total Material Cost" name="totalMaterialCost" value={this.state.totalMaterialCost} onChange={(e) => this.setState({totalMaterialCost: e.target.value})}/>
            </FormGroup>
            </Col>


            
            
            <Col md={1}>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="forSale" id="forSale" onChange={(e) => this.setState({forSale: e.target.value})}/> For Sale?
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

            <Button type="submit">Save</Button>
            {/* <Button onClick={this.props.toggleComponent}>Cancel</Button> */}
            <Link to="/ProjectIndex"><Button>Cancel</Button></Link>
        </Form>
       </>
    )
}
}

// onClick={this.props.onClick}