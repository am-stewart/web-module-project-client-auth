import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

class FriendList extends React.Component {
  state = {
    friend: [{
      id: '',
      name: '',
      age: '',
      email: ''
    }]
  }  
  
  componentDidMount() {
    axiosWithAuth()
    .get('/friends')
    .then(resp => {
      this.setState({
        friend: resp.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
  return (
    <div>
      <h1>Friends List</h1>
      {
        this.state.friend.map(friend => {
          return <h3 key={friend.id}>-{friend.name} -{friend.email}</h3>
        })
      }
    </div>
    )
  }
}

export default FriendList;