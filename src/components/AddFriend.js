import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

class AddFriend extends React.Component {

   state = {
    friend: {
      name: '',
      email: ''
    }
  }

  handleChanges = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('props', this.props)
    axiosWithAuth()
      .post('/friends', this.state.friend)
      .then(resp =>{
        this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>Friend Name
          <input
            type='text'
            name='name'
            value={this.state.friend.name}
            onChange={this.handleChanges}
          />
        </label>

        <label>Friend Email
          <input 
            type='email'
            name='email'
            value={this.state.friend.email}
            onChange={this.handleChanges}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
    )
  }
}

export default AddFriend;