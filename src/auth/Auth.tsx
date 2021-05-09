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
import {Button,Container, Row, Col } from 'reactstrap';
import './Auth.css'

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
<div className="center">
    <h2>MakerNote</h2>
<Link to="/Signup"><Button>Sign Up</Button></Link>

<Link to="/Login"><Button>Login</Button></Link>
</div>
<div>
    <Switch>
        <Route exact path="/Signup"><Signup updateToken={this.props.updateToken} /></Route>
        <Route exact path="/Login"><Login updateToken={this.props.updateToken} /></Route>
    </Switch>
</div>
</Router>
           
     
    </Container>



                <Row>
                    
                    <Col >
                        <div>

                           
                        </div>
                    </Col>
                    
                </Row>

            </div>
            </>
        )
    }
}


