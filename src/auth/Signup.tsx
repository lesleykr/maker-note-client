import React, { Component } from 'react';
import {  FormGroup, Label, ModalHeader, ModalBody, Modal } from 'reactstrap';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';



const SbuttonL = styled(Button)`
margin-right: 1em;
margin-left: -4em;
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
const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

interface IProps {
    updateToken: Function
}

interface IState {
    firstName: string,
    lastName: string,
    email: string,
    password: string, 
    errorMessage: string,
    modalToggle: boolean   
}

export default class RegistrationForm extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            errorMessage: '',           
            modalToggle: true                 
        };
    }
    formRef = React.createRef();

       handleSubmit = (event: any) => {
        // event.preventDefault()
        if (!this.state.email || !this.state.password) {
            alert("Please enter first name, last name, email address, and password");
          } else {
        fetch("http://localhost:3000/user/create", {
            method: 'POST',
            body:JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            console.log(data.error)
            {data.error ? (data.error.errors[0].message === "email must be unique") &&
            alert("An account with this email address already exists, please login or sign up with a different email address"):
            this.props.updateToken(data.sessionToken) }                     
        })
    }
       
    }

    modalCancel = () => this.setState({modalToggle: false});
   
   render() {    
           
    return(
        <>
<Modal isOpen={this.state.modalToggle}> 
<ModalBody> 
<Heading>Welcome! Create Your Free Account!</Heading>
<Form
      {...formItemLayout}
      
      name="register"
      onFinish={this.handleSubmit}
      scrollToFirstError
      >


<Form.Item label="First Name" rules={[{ required: true }]}>
        <Input id="firstName" type="text" name="firstName" placeholder="Enter First Name" onChange={(e) => this.setState({firstName: e.target.value})}/>
      </Form.Item>

      <Form.Item label="Last Name" rules={[{ required: true }]}>
        <Input id="lastName" type="text" name="lastName" placeholder="Enter Last Name" onChange={(e) => this.setState({lastName: e.target.value})}/>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input id="email" type="text" name="email" placeholder="Enter Email" onChange={(e) => this.setState({email: e.target.value})}/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password id="su_password" type="password" name="password" placeholder="Enter Password" onChange={(e) => this.setState({password: e.target.value})} pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$" title="Must contain at least 6 characters, including one number, one uppercase, and one lowercase letter." />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password id="su_password" type="password" name="password" placeholder="Enter Password" onChange={(e) => this.setState({password: e.target.value})} pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$" title="Must contain at least 6 characters, including one number, one uppercase, and one lowercase letter."/>
      </Form.Item>   
      <Form.Item {...tailFormItemLayout}>
        <SbuttonL type="primary" htmlType="submit">        
          Create Account!
        </SbuttonL>        
     
      <SbuttonR type="primary" onClick={this.modalCancel}>Maybe Later</SbuttonR>
      </Form.Item>
    </Form>
    </ModalBody>
    </Modal>

                 </> 
    )
}
}



