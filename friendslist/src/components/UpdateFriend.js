import React from "react"
import axios from "axios"
import "./friendsform.css"

class UpdateFriend extends React.Component {
  constructor() {
    super()
    this.state = {
      friend: {
        name: "",
        age: null,
        email: ""
      }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`http://localhost:5000/friends/${id}`)
      .then(response => {
        const { name, age, email } = response.data
        this.setState({ name, age, email })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = e => {
    e.persist();
    let value = e.target.value;
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   // invoke form submit
  //   this.props.addnewfriend(this.state.friend);
  //   this.setState({
  //     friend: {
  //       name: "",
  //       age: null,
  //       email: ""
  //     }
  //   })
  // };

  render() {
    return (
      <div className="createfriend">
        <h2>Update this Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.friend.name}
          />
          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.friend.age}
          />
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.friend.email}
          />
          <button type="submit">
            Add Friend
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateFriend;
