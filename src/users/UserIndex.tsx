import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import UserTable from './UserTable';
import UserEdit from './UserEdit';
import {User} from '../Types'

interface IProps {
    token: string
}

interface IState {
    user: [],
    updateActive: boolean,
    isComponentVisible: boolean,
    isActive: boolean,
    userToUpdate: {
        email: string,
        firstName: string,
        lastName: string,
        aboutMe: string,
        id: number
    }
}

export default class UserIndex extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
      user: [],
      updateActive: false,
      isComponentVisible: false,            
    isActive: false,
      userToUpdate: {
        email: "",
        firstName: "",
        lastName: "",
        aboutMe: "",
        id: Infinity
      }
        };
    }

    fetchUser = () => {
        fetch('http://localhost:3000/user/mine', {
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

editUpdateUser = (user: User) => {
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
               
                
                {(this.state.updateActive ? (<UserEdit userToUpdate={this.state.userToUpdate} updateOff={this.updateOff} token={this.props.token} fetchUser={this.fetchUser}/>) :  <UserTable user={this.state.user} editUpdateUser={this.editUpdateUser} updateOn={this.updateOn} fetchUser={this.fetchUser} token={this.props.token} />) }

               


            </Row>
        </Container>        
    )
}
}

                   