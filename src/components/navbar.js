import React, { Component } from 'react';
import UserName from './username';

class NavBar extends Component {
    render () {
        return ( 
            <div className="nav_bar">
                <div className="logo">
                    <i className="fab fa-codiepie"></i>
                    <h1>PieHole</h1>
                    <h3>Pick. Schedule. Eat. Repeat.</h3>
                </div>
                
                <div className="nav_buttons">
                
                    <button>My Picks</button>
                    <button>Schedule It</button>
                    <button>Checkout</button>
                    <button>My Receipts</button>
                </div>
                <div className="user_name">
                    <UserName/>
                </div>
            </div>
        )
    }
}

export default NavBar;