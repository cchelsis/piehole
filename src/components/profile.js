import React, { Component } from 'react';

class Profile extends Component {
    render () {
        return ( 
            <div className='profile_wrapper'>
                <div className="profile_background">
                
                <div className="profile">
                        <div className="favoritestar">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="eaticon">
                        <i className="fas fa-utensils"></i>

                        </div>
                        
                        <div className="eatery_name">
                            <h2>Eatery Name</h2>
                        </div>
                       
                        <button className="descButton">Description</button>
                </div>
               
                </div>
                <button className="add">Add</button>
            </div>

        )
    }
}

export default Profile;