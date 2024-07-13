import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const contactItems = store.contacts.map((item, index) => (
		<ContactCard key={index} name={item.name} address={item.address} phone={item.phone} email={item.email} />
	))
	useEffect(() => {
		actions.getContacts()
	},[])
	console.log(store.contacts)
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/demo">Add new contact</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<li>{contactItems}</li>
					</ul>
				</div>
			</div>
			{/* <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} /> */}
		</div>
	);
}