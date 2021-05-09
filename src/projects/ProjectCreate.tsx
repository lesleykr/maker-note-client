import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import ProjectsTable from './ProjectsTable';
import {Link, Redirect} from 'react-router-dom';
import ProjectIndex from './ProjectIndex';
import MaterialIndex from '../materials/MaterialIndex'
import Item from 'antd/lib/list/Item';

interface IProps {
    token: string
       
}

interface Material{
    materialName: string 
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
   materialId: number,
   materialName: string,
   isOpen: boolean,
   materials: Material[], //an array of things of type material
   redirectPI: boolean,
   saleOptions: boolean
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
            materialId: Infinity,
            materialName: "",
            isOpen: true,
            redirectPI: false,
            materials: [],
            saleOptions: false           
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        if (!this.state.projectName) {
            alert("Please enter a name for your project.");
          } else {
        fetch('http://localhost:3000/pm/createmat', {
            method: 'POST',
            body: JSON.stringify({projects: {projectName: this.state.projectName, dateStarted: this.state.dateStarted, dateFinished: this.state.dateFinished, forSale: this.state.forSale, medium: this.state.medium, totalMaterialCost: this.state.totalMaterialCost, dateSold: this.state.dateSold, price: this.state.price, storeSoldAt: this.state.storeSoldAt, notes: this.state.notes, }, materials: {id: this.state.materialId}}),
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
            materialId: Infinity,          
            redirectPI: true            
            })   
             console.log(this.state.materialId)       
        
        }) 
        .catch(error => {
            console.error("error: ", error)
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
                this.setState({materials: materialsData, 
                    materialId: materialsData.id,
                    materialName: materialsData.materialName
                })
                console.log(materialsData)
            
            })
    }

    close = () => this.setState({isOpen: !this.state.isOpen});

    componentDidMount(){
        console.log('mounted');
        this.fetchMaterials();
    }

    render() {

        // const { materials } = this.state;

        // let materialsList = materials.length > 0
        //     && materials.map((item: any, i: number) => {
        //   return (
        //     <option key={i} value={item.id}>{item.materialName}</option>
        //   )
        // }, this);

        
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
  {/* <Label for="exampleSelectMulti">Select Materials</Label>

  <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>

  </Input> */}

  <div>
      <select id="materialId" name="materialId" value={this.state.materialId} onChange={(e) => this.setState({materialId: +e.target.value})}>{this.state.materialName}</select>
  </div>

  
</FormGroup>

{/* <FormGroup>
                <Label htmlFor="materialId">material ID</Label>   
                <Input id="materialId" type="number" placeholder="materialId" name="materialId" value={this.state.materialId} onChange={(e) => this.setState({materialId: +e.target.value})}/>
            </FormGroup> */}


            
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
          <Input type="checkbox" name="forSale" id="forSale" onChange={(e) => this.setState({forSale: e.target.checked, saleOptions: true})}/> For Sale?
        </Label>        
        </FormGroup>
        </Col>

      {this.state.saleOptions == true ? (<>
      
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
            </FormGroup> </Col></>) : null}

           
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