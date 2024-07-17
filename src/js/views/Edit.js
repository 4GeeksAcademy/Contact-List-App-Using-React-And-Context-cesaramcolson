import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
export const Edit = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [inputValues, setInputValues] = useState({
        nameInput: '',
        emailInput: '',
        phoneInput: '',
        addressInput: ''
    });
    return (
        <div className="container">
            <h1 className="text-center mt-5">Add a new contact</h1>
            <form>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className="nameInput form-control"
                        onChange={(event) =>
                            setInputValues((prev) => ({
                                ...prev,
                                nameInput: event.target.value
                            }))}
                        value={inputValues.nameInput}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                setName(name.concat(name.inputValue));
                            }
                        }}
                        placeholder="what do you need to do?"
                    ></input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="emailInput form-control" placeholder="Enter email" value={inputValues.emailInput} onChange={(event) =>
                        setInputValues((prev) => ({
                            ...prev,
                            emailInput: event.target.value
                        }))} />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="phone" className="phoneInput form-control" placeholder="Enter phone" value={inputValues.phoneInput} onChange={(event) =>
                        setInputValues((prev) => ({
                            ...prev,
                            phoneInput: event.target.value
                        }))} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="addressInput form-control" placeholder="Enter address" value={inputValues.addressInput} onChange={(event) =>
                        setInputValues((prev) => ({
                            ...prev,
                            addressInput: event.target.value
                        }))} />
                </div>
                <button
                    type="button"
                    className="btn btn-primary form-control mt-3"
                    onClick={(e) => addContacts(e)}
                >save
                </button>
            </form>
        </div>
    );
};
Edit.propTypes = {
    match: PropTypes.object
};