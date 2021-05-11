import React, { Component } from 'react';
import './App.css'
import Auth from './auth/Auth';
import Sitebar from './home/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IState {
  sessionToken: string,
  sessionAdmin: string,
  stateChange: boolean
}

export default class App extends Component<IState, {}> {
  state = {
    sessionToken: '',
    sessionAdmin: "",
    stateChange: false
  }

  componentDidMount() {
    console.log("hello");
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token') });
    };
  }
  updateToken = (newToken: string, newAdmin: string) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('admin', newAdmin)
    this.setState({ sessionToken: newToken });
    this.setState({ sessionAdmin: newAdmin });
    console.log(this.state.sessionToken);
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "" });
    window.location.href = "/"
  }

  protectedViews = () => {
    return (this.state.sessionToken === localStorage.getItem('token') ? <Sitebar token={this.state.sessionToken} admin={localStorage.getItem('admin')} clickLogout={this.clearToken} />
      : <Auth updateToken={this.updateToken.bind(this)} />)
  }

  render() {
    return (
      <div>
        {this.protectedViews()}
      </div>

    );
  }
}