import React, { Component } from 'react';
import ProjectsTable from './ProjectsTable';
import ProjectsEdit from './ProjectEdit';
import { Project } from "../Types";

interface IProps {
    token: string,
    setViewToggle: Function
}

interface IState {
    projects: [],
    updateActive: boolean,
    projectsToView: object,
    isComponentVisible: boolean,
    isActive: boolean
    projectsToUpdate: {
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
        public: boolean,
        notes: string,
        id: number
    }
}

export default class ProjectIndex extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            projects: [],
            updateActive: false,
            projectsToUpdate: {
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
                public: false,
                notes: "",
                id: Infinity
            },
            isComponentVisible: false,
            projectsToView: {},
            isActive: false
        };
    }

    fetchProjects = () => {
        fetch('http://localhost:3000/projects/mine', {
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

    editUpdateProjects = (projects: Project) => {
        this.setState({ projectsToUpdate: projects });
        console.log(projects);
    }

    viewProjects = (projects: object) => {
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
                {(this.state.updateActive ? <ProjectsEdit projectsToUpdate={this.state.projectsToUpdate} updateOff={this.updateOff} token={this.props.token} fetchProjects={this.fetchProjects} /> : <ProjectsTable projects={this.state.projects} editUpdateProjects={this.editUpdateProjects} updateOn={this.updateOn} fetchProjects={this.fetchProjects} token={this.props.token} />)}
            </div>
        )
    }
}

