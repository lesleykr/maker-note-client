import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { Descriptions } from 'antd';

const Mdiv = styled.div`
margin-top: 30px;
`

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
padding-right: 70px;
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
const Imagediv = styled.div`

margin: auto;
width: 50%;
`
const IImage = styled(Image)`
margin-bottom: 50px;
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`
interface IProps {
    fetchProjects: Function,
    updateOff: () => void,
    token: string,
    projectsToView: {
        projectName: string,
        dateStarted: string,
        dateFinished: string,
        medium: string,
        totalMaterialCost: string,
        forSale: boolean,
        dateSold: string,
        price: string,
        storeSoldAt: string,
        status: string,
        technique: string,
        dimensions: string,
        tags: string,
        sold: boolean,
        productUrl: string,
        pictureUrl1: string,
        notes: string,
        id: number
    }
}

interface IState {
    viewProjectName: string,
    viewDateStarted: string,
    viewDateFinished: string,
    viewMedium: string,
    viewTotalMaterialCost: string,
    viewForSale: boolean,
    viewDateSold: string,
    viewPrice: string,
    viewStoreSoldAt: string,
    viewStatus: string,
    viewTechnique: string,
    viewDimensions: string,
    viewTags: string,
    viewSold: boolean,
    viewProductUrl: string,
    viewNotes: string,
    viewPictureUrl1: string,
    avUrl: string
}

const CLOUD_URL = 'https://api.cloudinary.com/v1_1/dx06fkupm/image/upload'

export default class ProjectsView extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            viewProjectName: this.props.projectsToView.projectName,
            viewDateStarted: this.props.projectsToView.dateStarted,
            viewDateFinished: this.props.projectsToView.dateFinished,
            viewMedium: this.props.projectsToView.medium,
            viewTotalMaterialCost: this.props.projectsToView.totalMaterialCost,
            viewForSale: this.props.projectsToView.forSale,
            viewDateSold: this.props.projectsToView.dateSold,
            viewPrice: this.props.projectsToView.price,
            viewStoreSoldAt: this.props.projectsToView.storeSoldAt,
            viewStatus: this.props.projectsToView.status,
            viewTechnique: this.props.projectsToView.technique,
            viewDimensions: this.props.projectsToView.dimensions,
            viewTags: this.props.projectsToView.tags,
            viewSold: this.props.projectsToView.sold,
            viewProductUrl: this.props.projectsToView.productUrl,
            viewNotes: this.props.projectsToView.notes,
            viewPictureUrl1: this.props.projectsToView.pictureUrl1,
            avUrl: '#'
        };
    }


    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/projects/update/${this.props.projectsToView.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                projects: {
                    projectName: this.state.viewProjectName, dateStarted: this.state.viewDateStarted, dateFinished: this.state.viewDateFinished, medium: this.state.viewMedium, viewTotalMaterialCost: this.state.viewTotalMaterialCost, forSale: this.state.viewForSale, dateSold: this.state.viewDateSold, price: this.state.viewPrice, storeSoldAt: this.state.viewStoreSoldAt, status: this.state.viewStatus,
                    technique: this.state.viewTechnique, dimensions: this.state.viewDimensions, tags: this.state.viewTags, sold: this.state.viewSold, productUrl: this.state.viewProductUrl, notes: this.state.viewNotes
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => {
            console.log(res)
            this.props.updateOff()
            this.props.fetchProjects();
        })
    }

    imgSubmit = async (e: any) => {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/user/cloudsign', {
            method: 'GET',
            headers: {
                'Authorization': this.props.token
            }
        })

        const { sig, ts } = await response.json()

        const file = (document.getElementById('file-input') as HTMLFormElement).files[0]
        const formData = new FormData()

        formData.append('file', file)
        formData.append('upload_preset', 'yawnhulb')
        formData.append('api_key', '776498227515992')
        formData.append('signature', sig)
        formData.append('timestamp', ts)

        const results = await (await fetch(CLOUD_URL, {
            method: 'POST',
            body: formData
        })).json()
        this.setState({ avUrl: results.secure_url })
        console.log(results)

        const final = await (await fetch(`http://localhost:3000/projects/imageset/${this.props.projectsToView.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': this.props.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: results.secure_url })
        })).json()
    }
    render() {
        return (
            <Mdiv>

                <div>

                    <Imagediv>
                        <IImage src={this.state.viewPictureUrl1} rounded width="150"
                            height="150" />
                    </Imagediv>
                </div>

<div>

                <Descriptions
                    title="View Project"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>


                    <Descriptions.Item label="Project Name">{this.state.viewProjectName}</Descriptions.Item>

                    <Descriptions.Item label="Status">{this.state.viewStatus}</Descriptions.Item>

                    <Descriptions.Item label="Medium">{this.state.viewMedium}</Descriptions.Item>

                    <Descriptions.Item label="Technique">{this.state.viewTechnique}</Descriptions.Item>

                    <Descriptions.Item label="Date Started">{this.state.viewDateStarted}</Descriptions.Item>

                    <Descriptions.Item label="Date Finished">{this.state.viewDateFinished}</Descriptions.Item>

                    <Descriptions.Item label="Dimensions">{this.state.viewDimensions}</Descriptions.Item>

                    <Descriptions.Item label="Product URL">{this.state.viewProductUrl}</Descriptions.Item>

                    <Descriptions.Item label="Total Material Cost">{this.state.viewTotalMaterialCost}</Descriptions.Item>

                    <Descriptions.Item label="Notes">{this.state.viewNotes}</Descriptions.Item>
                    
                </Descriptions>
                <Bdiv>

                        <CButton type="button" onClick={this.props.updateOff}>Cancel</CButton>
                    </Bdiv>
                </div>
            </Mdiv>
        )
    }
}

