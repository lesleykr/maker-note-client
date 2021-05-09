import React, {useState, Component} from 'react';
import {ModalBody, Modal } from 'reactstrap';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const SbuttonL = styled(Button)`
margin-right: 1em;
background-color: #5e4ac7;
border-radius: 10%;
border: none;
color: #f6a73f;
`;

const SbuttonR = styled(Button)`
margin-right: 1em;
margin-left: 1em;
background-color: #5e4ac7;
border-radius: 10%;
border: none;
color: #f6a73f;
`;

const Heading = styled.h5`
text-align: center;
margin-top: 0.5em;
margin-bottom: 1em;
color: #5e4ac7;
`
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

interface IProps {
    updateToken: Function
}

interface IState {
    email: string,
    password: string, 
    errorMessage: string,
    admin: boolean,
    firstName: string,
    modalToggle: boolean 
}

export default class Login extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
            admin: false,
            firstName: '',
            errorMessage: '',
            modalToggle: true 
        };
    }

    formRef = React.createRef();

    handleSubmit = (event: any) => {
        // event.preventDefault()
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

    // validateLogin = () => {
    //     this.setState({
    //         errorMessage: 'Incorrect Username or Password'
    //     })
        
    // }

    modalCancel = () => this.setState({modalToggle: false});

    render() {
        // const submitHandler = !this.state.email ? this.validateLogin : this.handleSubmit
    return(
        <Modal isOpen={this.state.modalToggle}> 
<ModalBody> 
<Heading>Welcome! Please Login.</Heading>
            <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.handleSubmit}    
    >
                 <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input id="email" type="text" name="email" placeholder="Enter Email" onChange={(e) => this.setState({email: e.target.value})}/>
      </Form.Item>
     
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password id="su_password" type="password" name="password" placeholder="enter password" onChange={(e) => this.setState({password: e.target.value})}/>
      </Form.Item>

                             
      <Form.Item {...tailLayout}>
        <SbuttonL type="primary" htmlType="submit">        
          Login
        </SbuttonL>        
     
      <SbuttonR type="primary" onClick={this.modalCancel}>Cancel</SbuttonR>
      </Form.Item>
            </Form>
            </ModalBody>
    </Modal>
    )
}

}


