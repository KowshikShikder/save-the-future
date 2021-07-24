import React, { useState } from 'react'
import './About.css'
import { Button } from '@material-ui/core'

export default function About() {

    const [MoreLess, setMoreLess] = useState("more")

    const readMore=()=>{
        if(MoreLess === "more"){
        document.getElementById('hidden-about').style.display="inline"
        setMoreLess("less")
        }
        else{
            document.getElementById('hidden-about').style.display="none"
            setMoreLess("more")

        }
    }


    return (
        <>
            <div className="about-main">
            <div className="title"> About us </div>

            {/* <div className="image" >   <img src={`${window.location.origin}/Image/map.jpg`} alt="" />  </div> */}
            
            <div className="about-us-text">
                <p> Around the world, too many children still start life at a disadvantage simply because of who they are and where they are from. Save the Children has a bold ambition: we believe in a world in which all children survive, have the chance to learn, and are protected from abuse, neglect and exploitation.
                    <span> </span>
                    <span className="hidden-about" id="hidden-about">
                    We are a global membership organisation, made up of Save the Children International and 30 national members. We share one name, one strategy and one ambition for children.
                    </span>
                </p>
                <Button variant="outlined" color="primary" onClick={readMore}> Read <span>-</span>
                <span id="moreLess"> {MoreLess} </span> </Button>
            </div>


            </div>
        </>
    )
}
