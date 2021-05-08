import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {User} from '../Types'

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
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.aboutMe}</td>
                    <td>
                        
                        <Button color="warning" onClick={() => {this.props.editUpdateUser(user); this.props.updateOn()}}>Update</Button>

                        <Button color="danger" onClick={() => {this.deleteUser(user)}}>Delete</Button>

                    </td>
                </tr>
            )
        })
        
    }
    render(){
        return(
        <>
        <h3>My Info</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>About Me</th>
                </tr>
            </thead>
            <tbody>
            {this.userMapper()}
            </tbody>
        </Table>

        </>
    )
}
}