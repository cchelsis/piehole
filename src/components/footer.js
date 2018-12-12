import React, { Component } from 'react';
import NavBar from './navbar';

class Footer extends Component {
    render () {
        return ( 
            <div className="footercontainer">
                <div className="nav_buttons">
                    <button>My Picks</button>
                    <button>Schedule It</button>
                    <button>Checkout</button>
                    <button>My Receipts</button>
                </div>
                <div className="copyright">
                    <h3>© PieHole All Rights Reserved. </h3>
                </div>
            </div>
        )
    }
}

export default Footer;