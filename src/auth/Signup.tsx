import React, { Component } from 'react';
import {  FormGroup, Label, ModalHeader, ModalBody, Modal } from 'reactstrap';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';



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

// const ModalStyle = styled.Modal`
// background-color: gray;
// `;

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

export default class RegistrationForm extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            errorMessage: '',
            autoCompleteResult: [],
            modalToggle: true                 
        };
    }
    formRef = React.createRef();

       handleSubmit = (event: any) => {
        // event.preventDefault()
        if (!this.state.email || !this.state.password || !this.state.firstName || !this.state.lastName) {
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
            this.props.updateToken(data.sessionToken)
            localStorage.setItem("firstName", data.user.firstName)                     
        })
    }
       
    }


//  onFinish = (values: any) => {
//     console.log('Received values of form: ', values);
//   };

    modalCancel = () => this.setState({modalToggle: false});
   
   render() {    
           
    return(
        <>
<Modal isOpen={this.state.modalToggle}> 
<ModalBody> 
<h1>Sign Up</h1>
<Form
      {...formItemLayout}
      
      name="register"
      onFinish={this.handleSubmit}
      scrollToFirstError
      >


<Form.Item name={['user', 'firstName']} label="First Name" rules={[{ required: true }]}>
        <Input id="firstName" type="text" name="firstName" placeholder="Enter First Name" onChange={(e) => this.setState({firstName: e.target.value})}/>
      </Form.Item>

      <Form.Item name={['user', 'lastName']} label="Last Name" rules={[{ required: true }]}>
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
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    </ModalBody>
    </Modal>

                 </> 
    )
}
}



