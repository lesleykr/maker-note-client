import React, { Component } from 'react';
import './App.css'
import Auth from './auth/Auth';
import Sitebar from './home/Navbar';
import ProjectsEdit from './projects/ProjectEdit';
import ProjectIndex from './projects/ProjectIndex';
import MaterialIndex from './materials/MaterialIndex'

export default class App extends Component {  
    state = {
      sessionToken: ''      
    }
  
componentDidMount(){
  console.log("hello");
  if(localStorage.getItem('token')){
    this.setState({sessionToken: localStorage.getItem('token')});
  };
}

  updateToken = (newToken: string) => { 
    localStorage.setItem('token', newToken);
    this.setState({sessionToken: newToken});
    console.log(this.state.sessionToken);
    }
    
    clearToken = () => {
      localStorage.clear();
      this.setState({sessionToken: ""});
    }
    
    protectedViews = () => {
      return (this.state.sessionToken === localStorage.getItem('token') ? <ProjectIndex token={this.state.sessionToken}/> 
      : <Auth updateToken={this.updateToken.bind(this)}/>)
    }
   
    // && <MaterialIndex token={this.state.sessionToken}/>

render() {
  return(
    <div>
    
          <Sitebar clickLogout={this.clearToken} />
          {this.protectedViews()}
        </div>
    
  );
}
}



//ORIGINAL FUNCTIONAL COMPONENT CODE
// function App() {
//   const [sessionToken, setSessionToken] = useState(''); 

//   useEffect(() => { 
//   if(localStorage.getItem('token')){
//     setSessionToken(localStorage.getItem('token'));
//   };
//   }, [])
  
//   const updateToken = (newToken) => { 
//   localStorage.setItem('token', newToken);
//   setSessionToken(newToken);
//   console.log(sessionToken);
//   }
  
//   const clearToken = () => {
//     localStorage.clear();
//     setSessionToken('');
//   }
  
//   const protectedViews = () => {
//     return (sessionToken === localStorage.getItem('token') ? <ProjectIndex token={sessionToken}/>
//     : <Auth updateToken={updateToken}/>)
//   }

//   return (
//     <div className="App">
//       <Sitebar clickLogout={clearToken}/>
//       {protectedViews()}
//       {/* <Auth updateToken={updateToken}/> */}
      
//           </div>
//   )
// }

// export default App
