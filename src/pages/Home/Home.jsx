import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
	return (
		<div>
			<h1>Welcome to the Home Page</h1>
			<Link to="/login">Go to Login</Link> <br />
			<Link to="/register">Go to Register</Link>
		</div>
	)
}

export default Home