import React, {useEffect, useState, useRef} from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {

    const dispatch = useDispatch();
    const ref = useRef()
    
    const logoutOfApp = () => {
        dispatch(logout);
        auth.signOut();
    };

    const searchClicked = () => {
        setMatchs1(false)
        setShowRight(false)
    };

    const [matchs1, setMatchs1] = useState(window.matchMedia("(max-width: 870px)").matches);
    const [matchs2, setMatchs2] = useState(window.matchMedia("(max-width: 870px)").matches);
    const [showRight, setShowRight] = useState(true);
   
    useEffect(() => {
        const handler = (e) => {
            setMatchs1( e.matches );
            setMatchs2( e.matches);
            setShowRight(true);
        }
        window.matchMedia("(max-width: 820px)").addListener(handler);
    }, []);

    useEffect(() => {

        if (matchs2) {

            const checkIfClickedOutside = e => {
            
                if (!showRight && ref.current && !ref.current.contains(e.target)) {
                    setShowRight(true)
                    setMatchs1(true)

                    if(!matchs1) {
                        setShowRight(true) 
                    }
                } 
            }

            document.addEventListener("mousedown", checkIfClickedOutside)
            return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
            }
        }
    }, [showRight, matchs1, matchs2])



    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://cdn.freelogovectors.net/wp-content/uploads/2020/01/linkedin-logo.png" alt="" />

                {(!matchs1) &&
                    <div className="header__search" ref={ref}>
                        <SearchIcon/>
                        <input type="text" placeholder="Search"/>
                    </div>
                }

            </div>

            {(matchs1) &&
                    <HeaderOption className="header__right" onClick={searchClicked} Icon={SearchIcon} title='Search'/>
            }

            {(showRight || !matchs2) &&
            <div className="header__right">

                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={SmsIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption 
                    avatar={true}
                    title='Me'
                    onClick={logoutOfApp}
                />
 
            </div>
            }
        </div>
    )
};

export default Header;
