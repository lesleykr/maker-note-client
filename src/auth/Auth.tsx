import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import './../App.css'
import styled from 'styled-components';

// const SCol = styled(Col)`
// margin-top: 200px;
// // border: red 5px solid;
// `

const MDiv = styled.div`
margin: 0;
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
// border: red 5px solid;
`

const SULink = styled(Link)`
postion: relative;
right: 500px;
margin-right: 1em;
border-radius: 10%;
border: none;
color: #5c4c76;
font-size: 35px;
`;

const LoLink = styled(Link)`
border-radius: 10%;
border: none;
color: #5c4c76;
font-size: 35px;
`;

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
{/*                            
                            <Row>
                                <SCol sm={{ size: "6", offset: 6 }} md={{ size: "3", offset: 12 }} xl={{ size: '4', offset: 11}}>

                                    <SULink to="/Signup">Sign Up</SULink>

                                    <LoLink to="/Login">Login</LoLink></SCol>

                            </Row> */}


                            <MDiv>

                            <SULink to="/Signup">Sign Up</SULink>

<LoLink to="/Login">Login</LoLink>

                                <SH>MakerNote</SH>
                                <SP>Never forget what you've created! MakerNote is the place to store the details of all your projects!</SP>

                                <MLink to="/Signup"><MButton>Create Your Free Journal!</MButton></MLink>

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


