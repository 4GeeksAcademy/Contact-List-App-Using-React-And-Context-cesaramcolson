import React from "react";

export const ContactCard = ({name, address, phone, email}) => {
    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img src="https://architecture.ou.edu/wp-content/uploads/2018/07/ANGELAPERSON-1447-300x300.jpg" className="rounded-circle mx-auto d-block img-fluid" />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-sm-left d-flex justify-content-between">
                    <div className="d-flex row">
                        <div>
                            <label className="name lead">{name}</label>
                        </div>
                        <div>
                            <i className="fas fa-map-marker-alt text-muted mr-3 ml-3"></i>
                            <span className="text-muted">{address}</span>
                        </div>
                        <div>
                            <span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                            <span className="text-muted small">{phone}</span>
                        </div>
                        <div>
                            <span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
                            <span className="text-muted small text-truncate">{email}</span>
                        </div>
                    </div>
                    <div>
                        <button className="btn" onClick={() => this.props.history.push('/edit')}><i className="fas fa-pencil-alt mr-3"></i></button>
                        <button className="btn" onClick={() => this.props.onDelete()}><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        </li>
    );
}