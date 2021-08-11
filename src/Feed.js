import React, {useState, useEffect} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    const user = useSelector(selectUser);
    const [input,setInput] = useState('');
    const [posts, setPosts] = useState([]);
    const [postEnd, setPostsEnd] = useState(7);

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    }, []);

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add ({
            displayName: user.name,
            description: user.email,
            message: input,
            photoURL: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");

    };

    const showMore = () => {
        setPostsEnd(postEnd+7)
    }
    
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} placeholder="Start a post" onChange={e=> setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" /> 
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" /> 
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" /> 
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" /> 
                </div>
            </div>

            <FlipMove>

                {posts.slice(0,postEnd).map(({id, data: {displayName, description, message, photoURL}}) => (
                    <Post 
                    key={id}
                    name={displayName}
                    description={description}
                    message={message}
                    photoUrl={photoURL}
                    />
                ))}
                
            </FlipMove>

            { !(postEnd >= posts.length) &&
                <button className='showMore__button' onClick={showMore}>Show more results</button>
            }
        </div> 
    );
}

export default Feed
