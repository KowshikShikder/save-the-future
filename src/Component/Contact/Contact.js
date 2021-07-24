import React from 'react'
import "./Contact.css"
import { Button } from '@material-ui/core'

export default function Contact() {
    return (
        <>
            <div className="contact-main">
                
                <div className="contact-text"> Any Question or query? </div>
                <div className="contact-button">  <a href="mailto:www.kowshikder7@gmail.com" > <Button  variant="contained"  color="primary"> Send email </Button> </a>  </div> 

            </div> 

        </>
    )
}
