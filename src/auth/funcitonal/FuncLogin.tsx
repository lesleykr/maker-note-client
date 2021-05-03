import React, {useState} from 'react';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/login", {
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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
              
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
               
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;