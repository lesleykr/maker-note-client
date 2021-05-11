import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import './../App.css'
import styled from 'styled-components';

const MDiv = styled.div`
margin: 0;
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
// border: red 5px solid;
`

const SH = styled.h1`
text-align: center;
color: #b820d1;
font-family: 'Tempus Sans ITC';
font-size: 130px;
margin-top: 100px;
`

const SP = styled.p`
text-align: center;
font-size: 30px;
color: #5c4c76;
font-family: 'Calibri';
margin-bottom: 50px;
`
const MLink = styled(Link)`
`

const MButton = styled(Button)`
text-align: center;
display: block;
  margin-left: auto;
  margin-right: auto;
background-color: #5e4ac7;
color: #f6a73f;
  font-size: 30px;
  font-family: 'Tempus Sans ITC'; 
  margin-bottom: 30px; 
  }
  `

interface IProps {
    updateToken: Function
}

export default class Auth extends Component<IProps, {}>{
    constructor(props: IProps) {
        super(props)

    }

    render() {

        return (
            <>
                <div className="auth">
                    <Container className="container" >
                        <Router>
                            <MDiv>
                                <SH>MakerNote</SH>
                                <SP>Never forget what you've created! MakerNote is the place to store the details of all your projects!</SP>
                                <MLink to="/Signup"><MButton>Create Your Free Journal!</MButton></MLink>
                                <MLink to="/Login"><MButton>Welcome back, Login!</MButton></MLink>
                            </MDiv>
                            <div>
                                <Switch>
                                    <Route exact path="/Signup"><Signup updateToken={this.props.updateToken} /></Route>
                                    <Route exact path="/Login"><Login updateToken={this.props.updateToken} /></Route>
                                </Switch>
                            </div>
                        </Router>
                    </Container>
                </div>
            </>
        )
    }
}