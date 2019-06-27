import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link } from "react-router-dom"
import axios from "axios"
import Home from "./components/Home"
import "./index.css"

class App extends React.Component {
	state = {
		friends: []
	}

	// componentDidMount() {
	// 	axios.get('http://localhost:5000/friends')
	// 		.then(response => {
	// 			this.setState({
	// 				friends: response.data
	// 			})
	// 		})
	// 		.then(() => {
	// 			return axios.get('http://localhost:5000/')
	// 		})
	// 		.then(response => {
	// 			console.log(response.data)
	// 		})
	// 		.catch(err => {
	// 			console.log('Error:', err)
	// 		})
	// }

	render() {
		const { friends } = this.state
		
		return (
			<div className="App">
                <header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/friends">Friends</Link>
                    </nav>
                </header>

                <Route path="/" exact render={() => <Home />} />
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