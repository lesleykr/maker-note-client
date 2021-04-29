import React, {useState} from 'react';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email: " + email, "password: " + password);
        fetch("http://localhost:3000/user/create", {
            method: 'POST',
            body:JSON.stringify({user: {email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
        
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
               
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;