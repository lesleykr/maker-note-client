import React, { Component } from 'react';
import {Button} from 'reactstrap';
import ProjectCreate from './ProjectCreate';

interface IProps {
    token: (token: string) => void

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

                    <ProjectCreate onClick={this.toggleComponent} fetchProjects={this.props.fetchProjects} token={this.props.token} />
                </Button>


            </div>
        )
    }
}

