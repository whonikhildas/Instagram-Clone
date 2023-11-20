import React from 'react';
import './Suggestions.css';
import { Avatar } from '@mui/material';



function Suggestions() {
    return (
        <div className='suggestions'>
            <div className='suggestion__title'>
                <span>Suggested for You</span>
                <span className='suggestion__see'>See All</span>
            </div>
            <div className='suggestions__usernames'>
        <div className='suggestion__username'>
            <div className='username__left'>
                <span className='avatar'>
                    <Avatar />
                </span>
                <div className='username__info'>
                    <span className='username'>komal012</span>
                    <span className='relation'>New to Instagram</span>

                </div>

                    </div>
                    <button className='follow__button'>Follow</button>
                </div>
            </div>
            <div className='suggestions__usernames'>
        <div className='suggestion__username'>
            <div className='username__left'>
                <span className='avatar'>
                    <Avatar />
                </span>
                <div className='username__info'>
                    <span className='username'>karishma22</span>
                    <span className='relation'>New to Instagram</span>

                </div>

                    </div>
                    <button className='follow__button'>Follow</button>
                </div>
            </div>
            <div className='suggestions__usernames'>
        <div className='suggestion__username'>
            <div className='username__left'>
                <span className='avatar'>
                    <Avatar />
                </span>
                <div className='username__info'>
                    <span className='username'>rittik</span>
                    <span className='relation'>New to Instagram</span>

                </div>

                    </div>
                    <button className='follow__button'>Follow</button>
                </div>
            </div>
            <div className='suggestions__usernames'>
        <div className='suggestion__username'>
            <div className='username__left'>
                <span className='avatar'>
                    <Avatar />
                </span>
                <div className='username__info'>
                    <span className='username'>allen</span>
                    <span className='relation'>New to Instagram</span>

                </div>

                    </div>
                    <button className='follow__button'>Follow</button>
                </div>
            </div>
            <div className='suggestions__usernames'>
        <div className='suggestion__username'>
            <div className='username__left'>
                <span className='avatar'>
                    <Avatar />
                </span>
                <div className='username__info'>
                    <span className='username'>nikolas</span>
                    <span className='relation'>New to Instagram</span>

                </div>

                    </div>
                    <button className='follow__button'>Follow</button>
                </div>
            </div>
        </div>
    )
}
export default Suggestions;