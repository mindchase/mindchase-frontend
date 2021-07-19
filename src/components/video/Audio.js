import React from 'react'
import {ReactAudio} from 'reactjs-media/audio'


const Audio = ()=> {
    return (
        <>
         <ReactAudio>
             src="/audio.mp4"
             poster="/poster.png"
         </ReactAudio>

        </>
    )
}

export default Audio
