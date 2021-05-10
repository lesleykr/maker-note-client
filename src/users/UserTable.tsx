import React, { Component } from 'react';
import { Table, Button, Card } from 'react-bootstrap';
import { User } from '../Types'
import styled from 'styled-components';

const Heading = styled(Card.Header)`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
font-size: 40px;

`
const Row = styled(Card.Text)`
font-size: 25px;
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

export default class UserTable extends Component<IProps, {}>{
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
            return (

                <>
                    <Card key={index}>
                        <Heading>My Account</Heading>
                        <Card.Body>
                            <Row>First Name: {user.firstName}
                            </Row>
                            <Row>Last Name: {user.lastName}
                            </Row>
                            <Row>E-mail: {user.email}
                            </Row>
                            <Row>About Me: {user.aboutMe}
                            </Row>

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