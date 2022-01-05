import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { Image } from 'antd';
import styled from 'styled-components';
import { Descriptions } from 'antd';
import APIURL from '../../helpers/environment'
import { Project } from "../../Types";


const Heading = styled.h1`
text-align: center;
width: 50%;
margin: auto;
font-family: 'Tempus Sans ITC';
color: #b820d1;
margin-bottom: 40px;

`

const Mdiv = styled.div`
margin-top: 30px;
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
flex: 1;
width: 25%;
// height: 350px;
resizeMode: 'contain';
`
interface IProps {
    fetchProjects: Function,
    updateOff: () => void,
    token: string,
    projectsToView: Project[]
}

interface IState {
    // viewProjectName: string,
    // viewDateStarted: string,
    // viewDateFinished: string,
    // viewMedium: string,
    // viewTotalMaterialCost: string,
    // viewForSale: boolean,
    // viewDateSold: string,
    // viewPrice: string,
    // viewStoreSoldAt: string,
    // viewStatus: string,
    // viewTechnique: string,
    // viewDimensions: string,
    // viewTags: string,
    // viewSold: boolean,
    // viewProductUrl: string,
    // viewNotes: string,
    // viewPictureUrl1: string,
    avUrl: string
}

const CLOUD_URL = 'https://api.cloudinary.com/v1_1/dx06fkupm/image/upload'

export default class ProjectsView extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            // viewProjectName: this.props.projectsToView.projectName,
            // viewDateStarted: this.props.projectsToView.dateStarted,
            // viewDateFinished: this.props.projectsToView.dateFinished,
            // viewMedium: this.props.projectsToView.medium,
            // viewTotalMaterialCost: this.props.projectsToView.totalMaterialCost,
            // viewForSale: this.props.projectsToView.forSale,
            // viewDateSold: this.props.projectsToView.dateSold,
            // viewPrice: this.props.projectsToView.price,
            // viewStoreSoldAt: this.props.projectsToView.storeSoldAt,
            // viewStatus: this.props.projectsToView.status,
            // viewTechnique: this.props.projectsToView.technique,
            // viewDimensions: this.props.projectsToView.dimensions,
            // viewTags: this.props.projectsToView.tags,
            // viewSold: this.props.projectsToView.sold,
            // viewProductUrl: this.props.projectsToView.productUrl,
            // viewNotes: this.props.projectsToView.notes,
            // viewPictureUrl1: this.props.projectsToView.pictureUrl1,
            avUrl: '#'
        };
    }


    // handleSubmit = (event: any) => {
    //     event.preventDefault();
    //     fetch(`${APIURL}/projects/update/${this.props.projectsToView.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             projects: {
    //                 projectName: this.state.viewProjectName, dateStarted: this.state.viewDateStarted, dateFinished: this.state.viewDateFinished, medium: this.state.viewMedium, viewTotalMaterialCost: this.state.viewTotalMaterialCost, forSale: this.state.viewForSale, dateSold: this.state.viewDateSold, price: this.state.viewPrice, storeSoldAt: this.state.viewStoreSoldAt, status: this.state.viewStatus,
    //                 technique: this.state.viewTechnique, dimensions: this.state.viewDimensions, tags: this.state.viewTags, sold: this.state.viewSold, productUrl: this.state.viewProductUrl, notes: this.state.viewNotes
    //             }
    //         }),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': this.props.token
    //         })
    //     }).then((res) => {
    //         console.log(res)
    //         this.props.updateOff()
    //         this.props.fetchProjects();
    //     })
    // }

    // imgSubmit = async (e: any) => {
    //     e.preventDefault()

    //     const response = await fetch(`${APIURL}/user/cloudsign`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': this.props.token
    //         }
    //     })

    //     const { sig, ts } = await response.json()

    //     const file = (document.getElementById('file-input') as HTMLFormElement).files[0]
    //     const formData = new FormData()

    //     formData.append('file', file)
    //     formData.append('upload_preset', 'yawnhulb')
    //     formData.append('api_key', '776498227515992')
    //     formData.append('signature', sig)
    //     formData.append('timestamp', ts)

    //     const results = await (await fetch(CLOUD_URL, {
    //         method: 'POST',
    //         body: formData
    //     })).json()
    //     this.setState({ avUrl: results.secure_url })
    //     console.log(results)

    //     const final = await (await fetch(`${APIURL}/projects/imageset/${this.props.projectsToView.[]id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Authorization': this.props.token,
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ url: results.secure_url })
    //     })).json()
    // }
    render() {
        return (
            <Mdiv>
                <Heading>View Project</Heading>
                {this.props.projectsToView.map(project => (
                    <>
                        <div>

                            <Imagediv>
                                <IImage src={project.pictureUrl1} />
                            </Imagediv>
                        </div>

                        <div>

                            <Descriptions
                                bordered
                                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>


                                <Descriptions.Item label="Project Name">{project.projectName}</Descriptions.Item>

                                <Descriptions.Item label="Status">{project.status}</Descriptions.Item>

                                <Descriptions.Item label="Medium">{project.medium}</Descriptions.Item>

                                <Descriptions.Item label="Technique">{project.technique}</Descriptions.Item>

                                <Descriptions.Item label="Date Started">{project.dateStarted}</Descriptions.Item>

                                <Descriptions.Item label="Date Finished">{project.dateFinished}</Descriptions.Item>

                                <Descriptions.Item label="Dimensions">{project.dimensions}</Descriptions.Item>

                                <Descriptions.Item label="Product URL">{project.productUrl}</Descriptions.Item>

                                <Descriptions.Item label="Total Material Cost">{project.totalMaterialCost}</Descriptions.Item>

                                <Descriptions.Item label="Notes">{project.notes}</Descriptions.Item>

                            </Descriptions>
                            <Bdiv>

                                <CButton type="button" onClick={this.props.updateOff}>Cancel</CButton>
                            </Bdiv>
                        </div>
                    </>))
                }
            </Mdiv>
        )
    }
}

