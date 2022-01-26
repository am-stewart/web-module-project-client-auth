import React from 'react';
import axios from 'axios';

class Login extends React.Component {

  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/login', this.state.credentials)
    .then(resp => {
      console.log(resp.data)
      localStorage.setItem('token', resp.data.token);
      localStorage.setItem('role', resp.data.role);
      localStorage.setItem('username', resp.data.username);
      this.props.history.push('/friends');
      console.log('login props', this.props)
    })
    .catch(err=>{
      console.log(err);
    });
  }

  render() {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={this.login}>
        <label className='loginForm'>Username
          <input
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
        </label>

        <label className='loginForm'>Password
          <input
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </label>
        <button>Log In</button>
      </form>
    </div>
    );
  }
}

export default Login;