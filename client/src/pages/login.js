import React, { Component } from 'react';
import fire from '../config/fire';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }

    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
        <div className="col-md-6">
        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
        <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>

        </form>
        </div>
        );
    }
}

export default Login;