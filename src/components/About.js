import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

const About = () => {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor : 'black',
        // borderRadius : '40px',
        // padding : '50px'
    });

    

    const [mode, setMode] = useState ("Set to Light Mode");

    const toggleStyle = () => {
        if (myStyle.color === 'white'){
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setMode("Set to Dark Mode");
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor : 'black'
            })
            setMode("Set to Light Mode");
        }
    }


    return (
        <>
            <div className="container" style = {myStyle}>
                <h1 className="my-3">About Us</h1>
                <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style = {myStyle}>Accordion Item #1</Accordion.Header>
                            <Accordion.Body style = {myStyle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body style = {myStyle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-dark my-3 mx-3">{mode}</button>
            </div>
        </>
    );
}

export default About;