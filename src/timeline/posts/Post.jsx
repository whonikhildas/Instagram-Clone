import React, { useState } from 'react';
import './Post.css';
import { Avatar} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import postObj from './Postobj';

function Post() {
//     const[liked, setLiked]= useState(false);
//     const[clickCount, setClickCount]= useState(0);

//     const handleDoubleClick=()=>{
//         // console.log(setLiked)
//         setClickCount(clickCount + 1);
    

//     if (clickCount === 1) {
//         setLiked(true);
//         setTimeout(()=>{
//             setClickCount(clickCount)
//         },300)
//     }
// }

        const [posts, setPosts] = useState(postObj);

        const handleDoubleClick = (postId) => { 
        const updatedPosts = posts.map(post => {
        if (post.id === postId) {
        return { ...post, likes: post.likes + 1 }; 
        }
        return post;
        });
        setPosts(updatedPosts);
        };



    return(
        <>
               
        
        {posts.map((post)=>(
        <div className='post' key={post.id}>
            <div className='post__header'>
                <div className='post__author'>
                <span className='post__avatar'><Avatar/>
                </span>
                <span className='post__username'>{post.username}</span><span> •   23h</span>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className='post__image'>
                <span>
                    <img src={post.url}
                    onDoubleClick={()=>handleDoubleClick(post.id)}
                    alt='post'/>
                </span>
            </div>
            <div className='post__footer'>
                <div className='post__footerIcons'>
                    <div className='left__footerIcons'>
                    <FavoriteBorderIcon className='postIcon' 
                    onClick={()=>handleDoubleClick(post.id)}
                    />
                    <ChatBubbleOutlineRoundedIcon className='postIcon'/>
                    <TelegramIcon className='postIcon'/>
                    </div>
                    <div className='right__footerIcons'>
                        <BookmarkBorderIcon className='postIcon'/>
                    </div>
                </div>
                <div >{post.likes} likes </div>
            </div>
        </div>
        ))}</>
    )
}
export default Post;