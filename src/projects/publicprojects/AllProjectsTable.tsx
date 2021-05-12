import React, { Component } from 'react';
import { Table, Button, Modal, ModalBody } from 'reactstrap';
import { Link } from "react-router-dom";
import { Project } from "../../Types";
import { Card, ListGroupItem, ListGroup, CardColumns } from 'react-bootstrap';
import styled from 'styled-components';


const SCard = styled(Card)`
width: 18rem; 
margin: 20px; 
border: #b820d1 1px solid;
`
const UButton = styled(Button)`
background-color: #5e4ac7;
color: #f6a73f;
margin-left: 2em;
`
const DButton = styled(Button)`
background-color: #5e4ac7;
color: #f6a73f;
`
const Heading = styled.h1`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
`
interface IProps {
    projects: Project[],
   viewProjects: Function,
   updateOn: () => void,
    fetchProjects: () => void,
    token: string
}


export default class AllProjectsTable extends Component<IProps, {}>{
    constructor(props: IProps) {
        super(props)
     
    }

  

   projectsMapper() {
        return this.props.projects.sort((a, b) => a.projectName.localeCompare(b.projectName)).map((project: Project, index: number) => {
            return (

                <SCard
                    className="p-3 col-2" key={index}>
                    <Card.Img variant="top" height="250" src={project.pictureUrl1} />
                    <Card.Body>
                        <Card.Title>{project.projectName}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Date Started:</b> {project.dateStarted}</ListGroupItem>
                        <ListGroupItem><b>Date Finished:</b> {project.dateFinished}</ListGroupItem>
                        <ListGroupItem><b>Medium:</b> {project.medium}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link> <UButton onClick={() => { this.props.viewProjects(project); this.props.updateOn() }}>View Project</UButton></Card.Link>


{/* 
                        <div>
                        
    <Descriptions
      title="Responsive Descriptions"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
        <Card.Img variant="top" height="250" src={project.pictureUrl1} />
      <Descriptions.Item label="Product">{project.projectName}</Descriptions.Item>
      <Descriptions.Item label="Product">{project.status}</Descriptions.Item>
      <Descriptions.Item label="Product">{project.medium}</Descriptions.Item>
      <Descriptions.Item label="Product">{project.technique}</Descriptions.Item>
      <Descriptions.Item label="Product">{project.dateStarted}</Descriptions.Item>
      <Descriptions.Item label="Product">{project.dateFinished}</Descriptions.Item>
      <Descriptions.Item label="Product">{project.dimensions}</Descriptions.Item>
      <Descriptions.Item label="Product">{project.productUrl}</Descriptions.Item>     
      <Descriptions.Item label="Product">{project.notes}</Descriptions.Item>
    </Descriptions>
    
  </div> */}
                        
                        
                    </Card.Body>
                </SCard>
            )
        })

    }
    render() {
        return (
            <>
                <Heading>My Projects</Heading>
                <hr style={{ backgroundColor: "#5e4ac7" }} />
                <CardColumns
                    className="col d-flex align-content-start flex-wrap"
                    style={{ marginTop: "2rem", marginRight: "20px", marginLeft: "20px" }}>
                    {this.projectsMapper()}
                </CardColumns>
            </>
        )
    }
}