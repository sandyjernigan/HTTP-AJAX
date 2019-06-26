import React from 'react'
import axios from "axios"
import './App.css'

class App extends React.Component {
	state = {
		friends: []
	}

	componentDidMount() {
		axios.get('http://localhost:5000/friends')
			.then(response => {
				this.setState({
					friends: response.data
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
		const { friends } = this.state
		
		return (
			<div className="App">
        <h1>My App</h1>
			</div>
		)
	}
}

export default App;
