import React from 'react'
import './share.css'
import {PermMedia,Label,Home,EmojiEmotions} from '@mui/icons-material'
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assests/person/2.jpeg" className='shareImg' />
                <input placeholder="What's in your mind Safak?" className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia
                            htmlColor='tomato' 
                            className='shareIcon'/>
                        <span className='shareOptionText'>photo or video</span>
                    </div>
                    <div className="shareOption">
                        <Label
                            htmlColor='blue'  
                            className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Home 
                            htmlColor='green' 
                            className='shareIcon'/>
                        <span className='shareOptionText'>Loaction</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions 
                            htmlColor='goldenrod' 
                            className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
      
    </div>
  )
}
