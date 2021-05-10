import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {User} from '../Types'
import styled from 'styled-components';

const Heading = styled.h1`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;


`
const Tdiv = styled.div`

width: 100vw;
`

const UButton = styled(Button)`
background-color: #5e4ac7;
color: #f6a73f;
margin-right: 2em;
margin-left: 2em;

`
const DButton = styled(Button)`
background-color: #5e4ac7;
color: #f6a73f;
`

const TD = styled.td`
color: #b820d1;
`
const TH = styled.th`
color: #5e4ac7;
`

interface IProps {
    user: User[],
    editUpdateUser: any,
    updateOn: () => void,
    fetchUser: () => void,
    token: string      
}

export default class UserTable extends Component <IProps, {}>{
    constructor(props: IProps) {
        super(props)
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
            return(
                <tr key={index}>
                    <TD>{user.email}</TD>
                    <TD>{user.firstName}</TD>
                    <TD>{user.lastName}</TD>
                    <TD>{user.aboutMe}</TD>
                    <td>
                        
                        <UButton onClick={() => {this.props.editUpdateUser(user); this.props.updateOn()}}>Update</UButton>

                        <DButton  onClick={() => {this.deleteUser(user)}}>Delete</DButton>

                    </td>
                </tr>
            )
        })
        
    }
    render(){
        return(
        <Tdiv>
        <Heading>My Info</Heading>
        <hr style={{ backgroundColor: "#5e4ac7" }}/>
        <Table striped>
            <thead>
                <tr>
                    <TH>Email</TH>
                    <TH>First Name</TH>
                    <TH>Last Name</TH>
                    <TH>About Me</TH>
                </tr>
            </thead>
            <tbody>
            {this.userMapper()}
            </tbody>
        </Table>

        </Tdiv>
    )
}
}