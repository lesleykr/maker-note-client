import React, { Component } from 'react';
import { Table, Button, Modal, ModalBody } from 'reactstrap';
import { Link } from "react-router-dom";
import { Project } from "../../Types";
import { Card, ListGroupItem, ListGroup, CardColumns } from 'react-bootstrap';
import styled from 'styled-components';
import { Descriptions } from 'antd';

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
  
    fetchProjects: () => void,
    token: string
}

interface IState {
    modalToggle: boolean
}

export default class AllProjectsTable extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            modalToggle: false
        }
    }

    modalCancel = () => this.setState({ modalToggle: false });

   projectsMapper() {
        return this.props.projects.sort((a, b) => a.projectName.localeCompare(b.projectName)).map((project: Project, index: number) => {
            return (
<>
                              
                        <div>
                  <Modal isOpen={this.state.modalToggle}>
    <ModalBody>
<Descriptions key={index}
title="Responsive Descriptions"
bordered
column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
  {/* <Card.Img variant="top" height="250" src={project.pictureUrl1} /> */}
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
</ModalBody>
  </Modal>
</div>                   
                   
                  
</>           
            )
        })

    }
    render() {
        return (
            <>        
               
                    {this.projectsMapper()}
               
            </>
        )
    }
}