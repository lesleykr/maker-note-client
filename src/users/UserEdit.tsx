import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styled from 'styled-components';

const Tdiv = styled.div`
width: 100%;
background-color: #f8f8f8;
margin-top: 50px;
padding-bottom: 90px;
border: #5e4ac7 1px solid;
`
const Fdiv = styled.div`
width: 50%;
margin: auto;
`
const Heading = styled.h1`
text-align: center;
margin: 40px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
`
const Slabel = styled(Label)`
margin-left: 18px;
`
const SForm = styled(Form)`
margin-top: 100px;
`
const Bdiv = styled.div`
margin: auto;
width: 50%;
text-align: center;
`
const SButton = styled(Button)`
margin-right: 20px;
background-color: #5e4ac7;
color: #f6a73f;
`
const CButton = styled(Button)`
background-color: #5e4ac7;
color: #f6a73f;
`
interface IProps {
    fetchUser: Function,
    updateOff: () => void,
    token: string,
    userToUpdate: {
        email: string,
        firstName: string,
        lastName: string,
        aboutMe: string,
        id: number
    }
}

interface IState {
    editEmail: string,
    editFirstName: string,
    editLastName: string,
    editAboutMe: string
}

export default class UserEdit extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            editEmail: this.props.userToUpdate.email,
            editFirstName: this.props.userToUpdate.firstName,
            editLastName: this.props.userToUpdate.lastName,
            editAboutMe: this.props.userToUpdate.aboutMe
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/update/${this.props.userToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                user: {
                    email: this.state.editEmail,
                    firstName: this.state.editFirstName,
                    lastName: this.state.editLastName,
                    aboutMe: this.state.editAboutMe
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => {
            console.log(res)
            this.props.updateOff()
            this.props.fetchUser();
        })
    }

    render() {
        return (
            <Tdiv>
                <SForm onSubmit={this.handleSubmit}>
                    <Heading>Edit Account Information</Heading>
                    <Fdiv>
                        <FormGroup>
                            <Slabel for="email" >Email</Slabel>
                            <Col >
                                <Input id="email" type="text" name="email" value={this.state.editEmail} placeholder="Email" onChange={(e) => this.setState({ editEmail: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Slabel for="firstName" >First Name</Slabel>
                            <Col >
                                <Input id="firstName" type="text" name="firstName" value={this.state.editFirstName} placeholder="First Name" onChange={(e) => this.setState({ editFirstName: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Slabel for="lastName" >Last Name</Slabel>
                            <Col >
                                <Input id="lastName" type="text" name="lastName" value={this.state.editLastName} placeholder="Last Name" onChange={(e) => this.setState({ editLastName: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Slabel for="aboutMe" >About Me</Slabel>
                            <Col >
                                <Input id="aboutMe" type="textarea" name="aboutMe" value={this.state.editAboutMe} placeholder="About Me" onChange={(e) => this.setState({ editAboutMe: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <Bdiv>
                            <SButton type="submit">Save</SButton>
                            <CButton onClick={() => this.props.updateOff()}>Cancel</CButton>
                        </Bdiv>
                    </Fdiv>
                </SForm>
            </Tdiv>
        )
    }
}
