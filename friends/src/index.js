import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link } from "react-router-dom"
import axios from "axios"
import Home from "./components/Home"
import Friends from "./components/Friends"
import "./styles.css"

class App extends React.Component {
	state = {
		friendslist: []
	}

	componentDidMount() {
		axios.get('http://localhost:5000/friends')
			.then(response => {
				this.setState({
					friendslist: response.data
				})
			})
			.then(() => {
				return axios.get('http://localhost:5000/')
			})
			.then(response => {
				console.log(response.data)
			})
			.catch(err => {
				console.log('Error:', err)
			})
	}

	render() {
		const { friendslist } = this.state
		
		return (
			<div className="App">
				<nav>
					<h1 className="store-header">Jason's Trinkets</h1>
					<div className="nav-links">
						<Link to="/">Home</Link>
						<Link to="/friends">Friends</Link>
					</div>
				</nav>

				<Route path="/" exact render={(props) => <Home />} />
				<Route path="/friends" exact render={(props) => <Friends {...props} friends={friendslist} />} />
				<Route path="/friends/:id" render={(props) => <Friends {...props} friends={friendslist} />} />
			</div>
		)
	}
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
)