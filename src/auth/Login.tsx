import React, {useState, Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

interface IProps {
    updateToken: Function
}

interface IState {
    email: string,
    password: string, 
    errorMessage: string,
    admin: boolean,
    firstName: string
}

export default class Login extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
            admin: false,
            firstName: '',
            errorMessage: ''
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault()
        if (!this.state.email || !this.state.password) {
            alert("Please enter a valid email address and password");
          } else {
        if (!this.state.email || !this.state.password) {
            alert("Please enter a valid email address and password");
          } else {
        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body:JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
            console.log(data)
            localStorage.setItem("admin", data.user.admin)
            localStorage.setItem("firstName", data.user.firstName)
        })
    }
    }
        
    }

    validateLogin = () => {
        this.setState({
            errorMessage: 'Incorrect Username or Password'
        })
        
    }

    render() {
        const submitHandler = !this.state.email ? this.validateLogin : this.handleSubmit
    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={this.handleSubmit}>
                
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" placeholder="enter email" onChange={(e) => this.setState({email: e.target.value})} />
                    {this.state.errorMessage && <span className="error">Email is Required</span>}
              
                    <label htmlFor="password">Password</label>
                    <input id="su_password" type="password" name="password" placeholder="enter password" onChange={(e) => this.setState({password: e.target.value})}/>
               
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

}


