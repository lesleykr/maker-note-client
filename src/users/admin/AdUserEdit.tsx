import React, { Component } from 'react';
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';


interface IProps {
    fetchUser: (fetchUser: string) => string,
    userToUpdate: (userToUpdate: string) => string,
    updateOff: (updateOff: boolean) => boolean
    // token: (token: string) => void
    
}

interface IState {
    editEmail: string,
    editFirstName: string,
    editLastName: string,
    editAboutMe: string
      
}

export default class UserEdit extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            editEmail: this.props.userToUpdate.email,
            editFirstName: this.props.userToUpdate.firstName,
            editLastName: this.props.userToUpdate.lastName,
            editAboutMe: this.props.userToUpdate.aboutMe
                      
        };
    }


    handleSubmit = (event, user) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/update/${this.props.userToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({user: {email: this.state.editEmail,
                 firstName: this.state.editFirstName, 
                 lastName: this.state.editLastName, 
                 aboutMe: this.state.editAboutMe}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then((res) => {
            console.log(res)            
            this.props.updateOff()
            this.props.fetchUser();
        })
    }

    render(){
    return(
        <>
        <h3>Edit User Info</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email" sm={2}>Email</Label>
        <Col md={5}>
                
                <Input id="email" type="text" name="email" value={this.state.editEmail} placeholder="Email" onChange={(e) => this.setState({editEmail: e.target.value})}/>
            
            </Col>
            </FormGroup>
            <FormGroup>
            <Label for="firstName" sm={2}>First Name</Label>
        <Col md={5}>
                
                <Input id="firstName" type="text" name="firstName" value={this.state.editFirstName} placeholder="First Name" onChange={(e) => this.setState({editFirstName: e.target.value})}/>
            
            </Col>
            </FormGroup>
            <FormGroup>
            <Label for="lastName" sm={2}>Last Name</Label>
        <Col md={5}>
                
                <Input id="lastName" type="text" name="lastName" value={this.state.editLastName} placeholder="Last Name" onChange={(e) => this.setState({editLastName: e.target.value})}/>
            
            </Col>
            </FormGroup>
                  <FormGroup>
            <Label for="aboutMe" sm={2}>About Me</Label>
        <Col md={5}>
                
                <Input id="aboutMe" type="text" name="aboutMe" value={this.state.editAboutMe} placeholder="About Me" onChange={(e) => this.setState({editAboutMe: e.target.value})}/>
            
            </Col>
            </FormGroup>
           
           
            <Button type="submit">Save</Button>
            {/* <Button onClick={this.props.toggleComponent}>Cancel</Button> */}
            <Button toggleComponent={this.props.toggleComponent}>Cancel</Button>
            
            </Form>
       </>    
    )
}
}
