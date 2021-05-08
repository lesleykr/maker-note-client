import React, { Component } from 'react';
import {Button} from 'reactstrap';
import ProjectCreate from './ProjectCreate';

interface IProps {
    token: string
}

interface IState {
    isComponentVisible: 
}

export default class ProjectFirst extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            
            isComponentVisible: false          
        };

    }

    toggleComponent = () => { 
        this.setState({ 
            isComponentVisible: !this.state.isComponentVisible 
        }); 
    } 

    render() {
        return (
            <div>

                <Button>

                <ProjectCreate toggleComponent={this.toggleComponent} fetchProjects={this.fetchProjects} token={this.props.token}/> 
                </Button>


                <Button onClick={this.toggleComponent}>New Project</Button>


            </div>
        )
    }
}

