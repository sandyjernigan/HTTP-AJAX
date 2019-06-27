import React from "react"
import axios from "axios"
import "./createFriend.css"

class CreateFriend extends React.Component {
  state = {
    id: null,
    name: "",
    age: null,
    email: ""
  };

  addnewfriend = e => {
    e.preventDefault();
    // invoke form submit
  };

  render() {
    return (
      <div className="createfriend">
        <h2>Add a New Friend</h2>
        <form onSubmit={this.addnewfriend}>
          <input
            type="text"
            name="friendsname"
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
