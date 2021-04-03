import React from "react";
import logo from './Rou-logo-white.png';
import background2 from './background-2.png';
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div style={{ backgroundImage: `url(${background2})`,
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    minWidth: '100%', 
                    minHeight: '100%' }}>
        <div className="d-flex flex-col">
            <div >
            <img className="logo-home" src={logo} alt="Logo" />
            </div>
            <div className="play flex-row">
                <p>Rou simulates the world renowned game roulette which is a multiplayer game where players
                    come together to place bets on either a single number, various groupings of numbers, 
                    the colors red or black, whether the number is odd or even, or if the numbers are high or low. </p>
                    <br></br>
                    <div className="btn-play">
                <Link className="btn btn-danger btn-block" to={"/login"}>Play Now</Link>
                </div>
            </div>
        </div> 
        </div> 
    );
};
export default LandingPage;