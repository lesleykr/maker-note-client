import React, { Component } from 'react';
import AllProjectsTable from './AllProjectsTable';
import AllProjectsView from './AllProjectsView';
import { Project } from "../../Types";

interface IProps {
    token: string
}

interface User {
    firstName: string
}

interface IState {
    projects: [],
    updateActive: boolean,
    isComponentVisible: boolean,
    isActive: boolean
    projectsToView: {
        projectName: string,
        dateStarted: string,
        dateFinished: string,
        medium: string,
        totalMaterialCost: string,
        forSale: boolean,
        dateSold: string,
        price: string,
        storeSoldAt: string,
        status: string,
        technique: string,
        dimensions: string,
        tags: string,
        sold: boolean,
        productUrl: string,
        pictureUrl1: string,
        notes: string,
        public: boolean,
        id: number,
        user: User[],
        firstName: string
    }
}

export default class ProjectIndex extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            projects: [],
            updateActive: false,
            projectsToView: {
                projectName: "",
                dateStarted: "",
                dateFinished: "",
                medium: "",
                totalMaterialCost: "",
                forSale: false,
                dateSold: "",
                price: "",
                storeSoldAt: "",
                status: "",
                technique: "",
                dimensions: "",
                tags: "",
                sold: false,
                productUrl: "",
                pictureUrl1: "",
                notes: "",
                public: false,
                user: [],
                firstName: "",
                id: Infinity
            },
            isComponentVisible: false,
            // projectsToView: {},
            isActive: false
        };
    }

    fetchProjects = () => {
        fetch('http://localhost:3000/projects/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => res.json())
            .then((projectsData) => {
                this.setState({ projects: projectsData })
                console.log(projectsData);
            })
    }

    viewProjects = (projects: Project) => {
        this.setState({ projectsToView: projects });
        console.log(projects);
    }

    updateOn = () => {
        this.setState({ updateActive: true });
    }

    updateOff = () => {
        this.setState({ updateActive: false });
    }

    handleHide = () => {
        this.setState({ isActive: true })
    }

    componentDidMount() {
        console.log('mounted');
        this.fetchProjects();
    }

    render() {
        return (
            <div>
                {(this.state.updateActive ? <AllProjectsView projectsToView={this.state.projectsToView} updateOff={this.updateOff} token={this.props.token} fetchProjects={this.fetchProjects} /> : <AllProjectsTable projects={this.state.projects} viewProjects={this.viewProjects} updateOn={this.updateOn} fetchProjects={this.fetchProjects} token={this.props.token} />)}
            </div>
        )
    }
}

