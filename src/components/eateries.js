import React, { Component } from 'react';
import Profile from "./profile";

class Eateries extends Component {
    render () {
        return ( 
            <div className="eateries">
                
                <div className="top_grid">
                    <Profile/>
                    <Profile/>
                    <Profile/>
                    <Profile/>
                </div>
               
                <div className="bottom_grid">
                    <Profile/>
                    <Profile/>
                    <Profile/>
                    <Profile/>
                </div>
                
            </div>
        )
    }
}

export default Eateries;