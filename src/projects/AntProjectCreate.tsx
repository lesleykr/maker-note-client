import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ProjectsTable from './ProjectsTable';
import { Form, Input, Button, Select, InputNumber, DatePicker } from 'antd';
import { FormInstance } from 'antd/lib/form';
import '../App.css'

interface IProps {
    fetchProjects: (fetchProjects: string) => string,
    
}

interface IState {
    projectName: string,
    medium: string, 
    totalMaterialCost: number
}

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


export default class ProjectCreate extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectName: '',
            medium: '',
            totalMaterialCost: 0,
            isOpen: true       
        };
    }

    onFinish = (values: any) => {
        console.log(values);
      };
    
      onReset = () => {
        this.formRef.current!.resetFields();
      };


    handleSubmit = (event: any) => {
        // event.preventDefault();
        fetch('http://localhost:3000/projects/create', {
            method: 'POST',
            body: JSON.stringify({projects: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) .then((res) => res.json())
        .then((projectsData) => {
            console.log(projectsData);               
            this.props.fetchProjects();
            this.setState({
            projectName: '',
            medium: '',
            totalMaterialCost: 0,
            dateStarted: '' 
            })
        })  
    }


    close = () => this.setState({isOpen: !this.state.isOpen});

    render() {

    return(
         <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.handleSubmit}>

<Form.Item label="projectName" rules={[{ required: true }]}>
          <Input id="projectName" type="text" name="projectName" value={this.state.projectName} placeholder="Project Name" onChange={(e) => this.setState({projectName: e.target.value})} />
        </Form.Item>

        <Form.Item label="medium">
          <Input id="medium" type="text" name="medium" value={this.state.medium} placeholder="Medium" onChange={(e) => this.setState({medium: e.target.value})} />
        </Form.Item>

        <Form.Item label="totalMaterialCost" >
          <InputNumber id="totalMaterialCost" type="number" name="totalMaterialCost" value={this.state.totalMaterialCost} placeholder="Total Material Cost" onChange={(e) => this.setState({totalMaterialCost: e.target.value})} />
        </Form.Item>

        <Form.Item label="DatePicker" >
          <DatePicker id="dateStarted" type="text" name="dateStarted" value={this.state.dateStarted} placeholder="Date Started" onChange={(e) => this.setState({dateStarted: e.target.value})} />
        </Form.Item>

        
        <Form.Item label="projectName" >
          <Input id="projectName" type="text" name="projectName" value={this.state.projectName} placeholder="Project Name" onChange={(e) => this.setState({projectName: e.target.value})} />
        </Form.Item>

        <Form.Item label="projectName" >
          <Input id="projectName" type="text" name="projectName" value={this.state.projectName} placeholder="Project Name" onChange={(e) => this.setState({projectName: e.target.value})} />
        </Form.Item>



     
            
              
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button" onClick={this.onReset}>
                  Reset
                </Button>
               
              </Form.Item>
            </Form>
          );
        }
      }