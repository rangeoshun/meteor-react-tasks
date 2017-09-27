import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => (
	<section>
		<h1>404</h1>
		<p>
			Dont you have tasks to do? <Link to="/">Get back to those!</Link>
		</p>
	</section>
)

export default NotFound
