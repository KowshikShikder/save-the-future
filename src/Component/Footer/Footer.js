import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer-main">
                <div className="link link-1">   
                    <span> Home  </span>
                    <div className="my-link-parent">
                    <a href="Save-The-Future">    <p className="my-link"> Who we are  </p> </a>
                    <a href="Save-The-Future">    <p className="my-link"> What we do  </p> </a>
                    <a href="Save-The-Future">    <p className="my-link"> Where we work  </p> </a>
                    </div>
                
                
                </div>
                <div className="link link-2">   
                    <span> About us  </span>
                    <div className="my-link-parent">
                    <a href="Save-The-Future">    <p className="my-link"> Work with us  </p> </a>
                    <a href="Save-The-Future">    <p className="my-link"> Transparency  </p> </a>
                    <a href="Save-The-Future">    <p className="my-link"> Accountability  </p> </a>
                    </div>
                
                    
                </div>
                <div className="link link-3">   
                    <span> Contact us  </span>
                <div className="contact-icon">
                        <div> <a href="Save-The-Future">  <i class="fab fa-facebook-f"></i> </a> </div>
                        <div> <a href="Save-The-Future">  <i class="fab fa-youtube"></i> </a> </div>
                        <div> <a href="Save-The-Future">  <i class="fab fa-instagram"></i> </a> </div>

                </div>
                </div>


            </div>
        </>
    )
}
