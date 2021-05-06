import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

interface IProps {
    updateToken: (newToken: string) => void
}

interface IState {
    firstName: string,
    lastName: string,
    email: string,
    password: string, 
    errorMessage: string
}

export default class Signup extends Component <IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            errorMessage: '',
            mClose: true
           
           
        };
    }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     });
    // }

    handleSubmit = (event: any) => {
        event.preventDefault()
        fetch("http://localhost:3000/user/create", {
            method: 'POST',
            body:JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.props.updateToken(data.sessionToken)           
        })
       
    }

    validateSignUp = () => {
        this.setState({
            errorMessage: 'Please enter a valid email'
        })
        // event.preventDefault();
    }

    toggle_close = () => this.setState({mClose: !this.state.mClose});

    render() {
        const submitHandler = !this.state.email ? this.validateSignUp : this.handleSubmit
    
    return(
        <div>
            <div>
            <h1>Sign Up</h1>
            <Form onSubmit={this.handleSubmit} >
            <FormGroup>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" name="firstName" placeholder="Enter First Name" onChange={(e) => this.setState({firstName: e.target.value})}/>                    
                </FormGroup>
                <FormGroup>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" name="lastName" placeholder="Enter Last Name" onChange={(e) => this.setState({lastName: e.target.value})}/>
                    </FormGroup>
                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" placeholder="Enter Email" onChange={(e) => this.setState({email: e.target.value})}/>
                    {this.state.errorMessage && <span className="error">Email is Required</span>}
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <input id="su_password" type="password" name="password" placeholder="Enter Password" onChange={(e) => this.setState({password: e.target.value})}/>
                    </FormGroup>
                <Button type="submit" onClick={this.props.onClick}>Signup</Button>
            </Form>
            </div>
          
            </div>        
    )
}
}


//RETURN WITH MODAL
// return(
//     <Modal isOpen={this.props.isOpen} >
//         <ModalHeader>Sign Up</ModalHeader>
//         <ModalBody>
//         <Form onSubmit={this.handleSubmit} >
//             <FormGroup>
//                 <label htmlFor="email">Email</label>
//                 <input id="email" type="text" name="email" placeholder="enter email" onChange={(e) => this.setState({email: e.target.value})}/>
//                 {this.state.errorMessage && <span className="error">Email is Required</span>}
//             </FormGroup>
//             <FormGroup>
//                 <label htmlFor="password">Password</label>
//                 <input id="su_password" type="password" name="password" placeholder="enter password" onChange={(e) => this.setState({password: e.target.value})}/>
//                 </FormGroup>
//             <Button type="submit" onClick={this.props.onClick}>Signup</Button>
//         </Form>
//         </ModalBody>
//     </Modal>
// )


//ORIGINAL FUNCTION COMPONENT CODE
// const Signup = (props) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("email: " + email, "password: " + password);
//         fetch("http://localhost:3000/user/create", {
//             method: 'POST',
//             body:JSON.stringify({user: {email: email, password: password}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             })
//         }).then(
//             (response) => response.json()
//         ).then((data) => {
//             props.updateToken(data.sessionToken)
//         })
        
//     }

//     return(
//         <div>
//             <h1>Sign Up</h1>
//             <form onSubmit={handleSubmit}>
                
//                     <label htmlFor="email">Email</label>
//                     <input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                
//                     <label htmlFor="password">Password</label>
//                     <input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
               
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     )
// }

// export default Signup;


