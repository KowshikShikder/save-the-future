import React from 'react'
import './Cover.css'
import Typewriter from 'typewriter-effect'
import Aos from 'aos'
import { Button } from '@material-ui/core';
Aos.init();

export default function Cover() {
    return (
        <div className="cover-main">
            <div className="image" >   <img src={`${window.location.origin}/Image/cover.jpg`} alt="" />  </div> 

            <div class="Cover-text">
                <p> Today's children are the future of tomorrow </p>
                <p> Save the
                    <Typewriter 
                        className="Typewriter"
                        options={{
                            typeSpeed:"10",
                            startDelay:"200",
                            autoStart:true,
                            loop: true,
                            delay: true,
                            strings:["Children", "Future", "World"]
                        }}
                    />
                </p>
            </div>
            <Button variant="outlined" className="donate-button"> Donate Now </Button>

        </div>
    )
}
