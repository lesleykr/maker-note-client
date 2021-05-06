import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {Link} from "react-router-dom";
import {Descriptions} from 'antd';

interface IProps {
    projectName: (projectName: string) => string,
    medium: (medium: string) => string,
    
}

export default class ProjectView extends Component <IProps, {}>{
    constructor(props: IProps) {
        super(props)

    }

//    deleteProject = (project: any) => {
//         fetch(`http://localhost:3000/projects/delete/${project.id}`, {
//             method: 'DELETE',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': this.props.token
//             })
//         })
//         .then(() => this.props.fetchProjects())
//     }

//     projectsMapper() {
//         return this.props.projects.map((project, index) => {
//             return(
//                 <tr key={index}>
//                     <th scope="row">{project.dateStarted}</th>                    
//                     <td>{project.dateFinished}</td>                    
//                     <td>{project.projectName}</td>
//                     <td>{project.medium}</td>
                    
                    
//                     <td>
                        
//                         <Button color="warning" onClick={() => {this.props.editUpdateProjects(project); this.props.updateOn()}}>Update</Button>
                      
//                         <Button color="danger" onClick={() => {this.deleteProject(project)}}>Delete</Button>

//                     </td>
//                 </tr>
//             )
//         })
        
//     }

    render(){
    return(
        <div>
        <Descriptions
          title="Responsive Descriptions"
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Project Name">{this.props.projectName}</Descriptions.Item>
          <Descriptions.Item label="Medium">{this.props.medium}</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
        
          </Descriptions.Item>
        </Descriptions>
        {/* <Button><Link to="/ProjectEdit">Edit Project</Link></Button>
        <Button onClick={this.props.onClick}>Close</Button>
      
      <Switch>
          <Route exact path="/ProjectEdit"><ProjectEdit projectsToUpdate={this.props.projectsToUpdate} updateOff={this.props.updateOff} token={this.props.token}/></Route>
      </Switch> */}
     <Button toggleComponent={this.props.toggleComponent}>Cancel</Button>
      </div>
    )
    }
}



