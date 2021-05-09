import React, { Component } from 'react';
import {  FormGroup, Label, ModalHeader, ModalBody, Modal } from 'reactstrap';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import styled from 'styled-components';


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
const [form] = Form.useForm();

const { Option } = Select;

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

       handleSubmit = (event: any) => {
        event.preventDefault()
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
// componentDidMount(){
//    const form = Form.useForm();
// }

 onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

    modalCancel = () => this.setState({modalToggle: false});
   
   render() {    
    // const form = Form.useForm();        
    return(
        <>
<Modal isOpen={this.state.modalToggle}> 
<ModalBody> 
<h1>Sign Up</h1>
<Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={this.onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
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
        <Input />
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
        <Input.Password />
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
        <Input.Password />
      </Form.Item>   
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </ModalBody>
    </Modal>

                 </> 
    )
}
}



