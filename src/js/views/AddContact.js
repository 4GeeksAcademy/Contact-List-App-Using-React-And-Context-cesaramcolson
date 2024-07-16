import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await actions.createContact(contact);
        navigate("/");
    };

    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add a new contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" name="name" value={contact.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" value={contact.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" className="form-control" placeholder="Enter phone" name="phone" value={contact.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" name="address" value={contact.address} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Save</button>
                    <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                </form>
            </div>
        </div>
    );
};