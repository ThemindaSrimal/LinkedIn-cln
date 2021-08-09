import {Avatar} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'; 

function Sidebar() {

    const user = useSelector(selectUser); 

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            {topic}
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="" />
                <Avatar src={user.photoUrl} className='sidebar__avatar' style={{width: '75px', height: '75px'}}>{user.email[0]}</Avatar>
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">4,532</p> 
                </div> 
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,532</p>  
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('React')}
                {recentItem('Python')}
                {recentItem('Express')}
                {recentItem('Java')}
                {recentItem('Flutter')}
            </div>
        </div>
    )
}

export default Sidebar
