import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbarr = (props) => {

    // const changeMode = () => {
    //     // props.toggleMode();
    //     props.setMode("Night");
    // }

    return (

        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                        <label className="form-check-label" for="flexSwitchCheckChecked">Enable {props.mode} Mode</label>
                    </div>
                    {/* <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Screen Modes
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <div className={`form-check form-switch text-dark ps-5`}>
                                    <input className="form-check-input" onClick={changeMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    <label className="form-check-label" for="flexSwitchCheckChecked">Night Dark</label>
                                </div> 
                            </li>
                            <li>
                                <div className={`form-check form-switch text-dark ps-5`}>
                                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    <label className="form-check-label" for="flexSwitchCheckChecked">Ocean Dark</label>
                                </div> 
                            </li>
                            <li>
                                <div className={`form-check form-switch text-dark ps-5`}>
                                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    <label className="form-check-label" for="flexSwitchCheckChecked">Forest Dark</label>
                                </div> 
                            </li>
                        </ul>
                    </div> */}
                </div>
                </div>
            </nav>
        </div>       
    );
}

Navbarr.propTypes = {
    title: PropTypes.string
}

Navbarr.defaultProps = {
    title: "Set title"
}

export default Navbarr