import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import { Home, Friend, Friends, CreateFriend, UpdateFriend } from "./components/";
import "./index.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [], 
      activefriend: null, 
      errMsg: null
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log("Error:", err);
      });
  }

  addnewfriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        this.setState({ 
          friends: response.data, 
          errMsg: null
        })
        this.props.history.push('./friends')
      })
      .catch(err => {
        this.setState({ errMsg: err.response.data.Error })
      });
  };

  updateFriends = (friends) => {
		this.setState({ friends })
  }

  render() {
    const { friends } = this.state;

    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
          </nav>
          <p>{this.state.errMsg}</p>
        </header>

        <Route path="/" exact render={() => <Home />} />
        <Route path="/friends"
          exact render={props => <Friends {...props} friends={friends} />}
        />
        <Route path="/friends/:id"
          render={props => <Friend {...props} friends={friends} />}
        />
        <Route path="/new"
          render={props => <CreateFriend {...props} addnewfriend={this.addnewfriend} />}
        />
        <Route path="/update/:id"
          render={props => <UpdateFriend {...props} friends={friends} updateFriends={this.updateFriends} />}
        />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App)

ReactDOM.render(
  <BrowserRouter>
    <AppWithRouter />
  </BrowserRouter>,
  document.getElementById("root")
);
