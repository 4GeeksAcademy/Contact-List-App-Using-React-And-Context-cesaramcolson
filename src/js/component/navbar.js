import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="mx-4">
				<Link to="/add">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};