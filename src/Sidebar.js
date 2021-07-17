import {Avatar} from '@material-ui/core';
import React from 'react';
import './Sidebar.css'; 

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="" />
                <Avatar className='sidebar__avatar'/>
                <h2>John Doe</h2>
                <h4>johndoe@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">4,532</p> 
                </div> 
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">4,532</p>  
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
