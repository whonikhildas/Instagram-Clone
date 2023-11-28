import React from 'react';
import { Avatar} from '@mui/material';
import './Story.css';



function Story () {
    return(
        <div className='story'>
            <span className='story__user'>
            <span className='story__avatar'>
                <Avatar/>
             </span>
             <span>vishal</span>
             </span>
            <span className='story__user'>
            <span className='story__avatar'>
                <Avatar/>
             </span>
             <span>rishab</span>
             </span>
            <span className='story__user'>
            <span className='story__avatar'>
                <Avatar/>
             </span>
             <span>kumar</span>
             </span>
            <span className='story__user'>
            <span className='story__avatar'>
                <Avatar/>
             </span>
             <span>rushali</span>
             </span>
            <span className='story__user'>
            <span className='story__avatar'>
                <Avatar/>
             </span>
             <span>nitika</span>
             </span>
            <span className='story__user'>
            <span className='story__avatar'>
                <Avatar/>
             </span>
             <span>aman</span>
             </span>
            <span className='story__user'>
            <span className='story__avatar'>
                <Avatar/>
             </span>
             <span>trunnt</span>
             </span>
           
             
        </div>

    )
}

export default Story;