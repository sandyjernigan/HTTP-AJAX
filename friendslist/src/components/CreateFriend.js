import React from "react"
// import axios from "axios"
import "./friendsform.css"

class CreateFriend extends React.Component {
  state = {
    friend: {
      name: "",
      age: null,
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // invoke form submit
    this.props.addnewfriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: null,
        email: ""
      }
    })
  };

  render() {
    return (
      <div className="createfriend">
        <h2>Add a New Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="age"
            placeholder="Age..."
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address..."
            onChange={this.handleChange}
            value={this.state.email}
          />
          <button type="submit">
            Add Friend
          </button>
        </form>
      </div>
    );
  }
}

export default CreateFriend;
