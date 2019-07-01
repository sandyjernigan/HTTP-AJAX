import React from "react"
import axios from "axios"
import "./friendsform.css"

class UpdateFriend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: null,
      email: "",
      errMsg: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id 
    const friend = this.props.friends.find(i => String(i.id) === id)
      this.setState({ 
        name: friend.name, 
        age: friend.age, 
        email: friend.email });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateFriend = e => {
    e.preventDefault()
    const id = this.props.match.params.id
    const { name, age, email } = this.state
    const payload = { name, age, email }

    axios.put(`http://localhost:5000/friends/${id}`, payload)
      .then((response) => {
        this.setState({
          errMsg: null
        })
        this.props.updateFriends(response.data)
        this.props.history.push("/friends")
      })
  }

  deleteFriend = e => {
    e.preventDefault()
    const id = this.props.match.params.id

    axios.delete(`http://localhost:5000/friends/${id}`)
      .then((response) => {
        this.setState({
          errMsg: null
        })
        this.props.updateFriends(response.data)
        this.props.history.push("/friends")
      })
  }


  render() {
    const { name, age, email } = this.state

    return (
      <div className="createfriend">
        <h2>Update this Friend</h2>
        <form onSubmit={this.updateFriend}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={age}
          />
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <button type="submit">
            Update
          </button>
          <button onClick={this.deleteFriend}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateFriend;
