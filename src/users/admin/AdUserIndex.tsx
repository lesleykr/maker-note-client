import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import AdUserTable from './AdUserTable';
import AdUserEdit from './AdUserEdit';

interface IProps {
    // token: (token: string) => string,
    token: string
}

interface IState {
    email: string,
    firstName: string,
    lastName: string,
    aboutMe: string
}

export default class UserIndex extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
      user: [],
      updateActive: false,
      userToUpdate: {}
        };
    }

    fetchUser = () => {
        fetch('http://localhost:3000/user/all', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then( (res) => res.json())
            .then((userData) => {
                this.setState({user: userData})
                console.log(userData);
            })
    }

editUpdateUser = (user) => {
    this.setState({userToUpdate: user});
    console.log(user);
}

updateOn = () => {
    this.setState({updateActive: true});
}

updateOff = () => {
    this.setState({updateActive: false});
}

componentDidMount(){
    console.log('mounted');
    this.fetchUser();
}


   render(){
    return(
        <Container>
            <Row>
               
                
                {(this.state.updateActive ? (<AdUserEdit toggleComponent={this.toggleComponent} userToUpdate={this.state.userToUpdate} updateOff={this.updateOff} token={this.props.token} fetchUser={this.fetchUser}/>) :  <AdUserTable user={this.state.user} editUpdateUser={this.editUpdateUser} updateOn={this.updateOn} fetchUser={this.fetchUser} token={this.props.token} />) }

               


            </Row>
        </Container>        
    )
}
}

                   