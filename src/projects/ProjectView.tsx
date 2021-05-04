import React, { Component } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import { Descriptions, Button } from 'antd';
import ProjectEdit from './ProjectEdit';

interface IProps {
    fetchProjects: (fetchProjects: string) => string,
    projectsToUpdate: (projectsToUpdate: string) => string,
    updateOff: (updateOff: boolean) => boolean
    // token: (token: string) => void
    
}

interface IState {
    editProjectName: string,
    editMedium: string, 
    editTotalMaterialCost: number
    
}

export default class ProjectView extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            editProjectName: this.props.projectsToUpdate.projectName,
            editMedium: this.props.projectsToUpdate.medium,
            editTotalMaterialCost: this.props.projectsToUpdate.totalMaterialCost,  
            isOpen: false          
        };
    }


    // handleSubmit = (event, projects) => {
    //     event.preventDefault();
    //     fetch(`http://localhost:3000/projects/update/${this.props.projectsToUpdate.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({projects: {projectName: this.state.editProjectName, medium: this.state.editMedium, editTotalMaterialCost: this.state.editTotalMaterialCost}}),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': this.props.token
    //         })
    //     }) .then((res) => {
    //         console.log(res)            
    //         this.props.updateOff()
    //         this.props.fetchProjects();
    //     })
    // }

    toggle = () => this.setState({isOpen: !this.state.isOpen});

    render(){
    return(
        <div>
        <Descriptions
          title="Responsive Descriptions"
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Project Name">{this.state.editProjectName}</Descriptions.Item>
          <Descriptions.Item label="Medium">{this.state.editMedium}</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
        
          </Descriptions.Item>
        </Descriptions>
        <Button><Link to="/ProjectEdit">Edit Project</Link></Button>
        <Button onClick={this.props.onClick}>Close</Button>
      
      <Switch>
          <Route exact path="/ProjectEdit"><ProjectEdit projectsToUpdate={this.props.projectsToUpdate} updateOff={this.props.updateOff} token={this.props.token}/></Route>
      </Switch>
      </div>
    );


    //     <h3>Edit Project</h3>
    //             <Form >
    //                 <FormGroup>
    //                     <Label htmlFor="projectName">Project Name:</Label>
    //                     <Input name="projectName" value={this.state.editProjectName} onChange={(e) => this.setState({editProjectName: e.target.value})}/>
    //                 </FormGroup>
    //                 <FormGroup>
    //                     <Label htmlFor="medium">Medium:</Label>
    //                     <Input name="medium" value={this.state.editMedium} onChange={(e) => this.setState({editMedium: e.target.value})}/>
    //                 </FormGroup>
    //                 <FormGroup>
    //                     <Label htmlFor="totalMaterialCost">Total Material Cost:</Label>
    //                     <Input name="totalMaterialCost" value={this.state.editTotalMaterialCost} onChange={(e) => this.setState({editTotalMaterialCost: e.target.value})}/>
    //                 </FormGroup>
    //                 <Button type="submit">Update Project</Button>
    //             </Form>
    //     {/* //     </ModalBody>
    //     </Modal> */}
    //     </>
    // )
}
}
