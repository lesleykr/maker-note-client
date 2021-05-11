import React, { Component } from 'react';
import { Button, Card, Container, Row, Image, Col, Form } from 'react-bootstrap';
import { User } from '../Types'
import styled from 'styled-components';
import './UserTable.css'

const Heading = styled(Card.Header)`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
font-size: 40px;
`
const SImage = styled(Image)`
margin-left: 25px;
`
const SRow = styled(Card.Text)`
font-size: 25px;
`
const Tdiv = styled.div`
width: 100vw;
`
const UButton = styled(Button)`
background-color: #5e4ac7;
color: #f6a73f;
margin-right: 2em;

`
const DButton = styled(Button)`
background-color: #5e4ac7;
color: #f6a73f;
`

const Pform = styled.form`
margin-left: 15px;
`
const Pbutton = styled.button`
margin-top: 15px;
margin-left: 10px;
background-color: #5e4ac7;
color: #f6a73f;
padding-top: 7px;
padding-bottom: 7px;
padding-right: 15px;
padding-left: 15px;
border-radius: 7%;
`
interface IProps {
    user: User[],
    editUpdateUser: any,
    updateOn: () => void,
    fetchUser: () => void,
    token: string
}

interface IState {
    avUrl: string
}

const CLOUD_URL = 'https://api.cloudinary.com/v1_1/dx06fkupm/image/upload'

export default class UserTable extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            avUrl: '#'
        }
    }

    handleSubmit = async (e: any) => {
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

        const final = await (await fetch('http://localhost:3000/user/imageset', {
            method: 'PUT',
            headers: {
                'Authorization': this.props.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: results.secure_url })
        })).json()
    }

    deleteUser = (user: User) => {
        fetch(`http://localhost:3000/user/delete/${user.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
    }

    userMapper() {
        return this.props.user.map((user: User, index: number) => {
            return (
                <>
                    <Card key={index}>
                        <Heading>My Account</Heading>
                        <Row>
                            <Col xs={6} md={4}>
                                <SImage src={user.photo} alt="user photo" width="150"
                                    height="150" rounded />
                                <Pform encType="multipart/form-data" onSubmit={this.handleSubmit}>
                                    <input id="file-input" type="file" />
                                    <Pbutton>Upload Image</Pbutton>
                                </Pform>
                            </Col>
                        </Row>
                        <Card.Body>
                            <SRow>First Name: {user.firstName}
                            </SRow>
                            <SRow>Last Name: {user.lastName}
                            </SRow>
                            <SRow>E-mail: {user.email}
                            </SRow>
                            <SRow>About Me: {user.aboutMe}
                            </SRow>
                            <UButton onClick={() => { this.props.editUpdateUser(user); this.props.updateOn(); }}>Update</UButton>
                            <DButton onClick={() => { this.deleteUser(user); }}>Delete</DButton>
                        </Card.Body>
                    </Card>
                </>
            )
        })
    }
    render() {
        return (
            <Tdiv>
                {this.userMapper()}
            </Tdiv>
        )
    }
}