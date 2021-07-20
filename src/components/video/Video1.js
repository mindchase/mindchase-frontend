import React from 'react' 
import ReactPlayer from 'react-player'

const Video =()=> {

    return (
        <>
            <header>
                <input type="text" placeholder= "input the video Url"/>
            </header>
            <ReactPlayer
        <div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are" titel="one" ></iframe></div></div>

            />

 

        </>
    )
}

export default Video

