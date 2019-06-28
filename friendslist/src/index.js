import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import { Home, Friend, Friends, CreateFriend, UpdateFriend } from "./components/";
import "./index.css";

class App extends React.Component {
  state = {
    friends: [], 
    activefriend: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .then(() => {
        return axios.get("http://localhost:5000/");
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log("Error:", err);
      });
  }

  addnewfriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        this.setState({ friends: response.data })
        this.props.history.push('./friends')
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateFriend = (e, friend) => {
    this.setState({ activefriend: friend }, () => {
      this.props.history.push('./update')
    })
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
        </header>

        <Route path="/" exact render={() => <Home />} />
        <Route path="/friends"
          exact render={props => <Friends {...props} friends={friends} />}
        />
        <Route path="/friends/:id"
          render={props => <Friend {...props} friends={friends} setUpdateFriend={this.setUpdateFriend} />}
        />
        <Route path="/new"
          render={props => <CreateFriend {...props} addnewfriend={this.addnewfriend} />}
        />
        <Route path="/update"
          render={props => <UpdateFriend {...props} activefriend={this.state.activefriend} />}
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
