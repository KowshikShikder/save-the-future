import { Button } from '@material-ui/core'
import React from 'react'
import './Navigation.css'
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';




export default function Navigation() {

    const closeSideBar=()=>{
        document.getElementById('side-nav-parent').style.marginRight="-350px"
        setTimeout(()=>{
        document.getElementById('side-nav-parent').style.display="none"
        },500)
        document.getElementById('side-nav-parent').style.opacity="1"

    }

    const openSideBar=()=>{
        document.getElementById('side-nav-parent').style.display="grid"
        setTimeout(()=>{
        document.getElementById('side-nav-parent').style.marginRight="0px"
            },10)
        document.getElementById('side-nav-parent').style.opacity="1"

    }



    return (
        <div className="nav-main">
            <div className="nav-normal">
                <div className="nav-icon">
                <div>   <i class="fas fa-child"></i>     </div> 
                <div>    Save The Future                 </div>
                    
                </div>
                <div className="nav-parent">
                    <Button className="nav-button" variant="outlined" color="primary"> Home    </Button>
                    <Button className="nav-button" variant="outlined" color="primary"> About us    </Button>
                    <Button className="nav-button" variant="outlined" color="primary"> Objects    </Button>
                    <Button className="nav-button" variant="outlined" color="primary"> Our Projects    </Button>
                    <Button className="nav-button" variant="outlined" color="primary"> Contact    </Button>
                    <Button className="nav-menu" onClick={openSideBar} > <MenuIcon color="primary" /> </Button>
                </div>
            </div>



            <div className="side-nav-parent" id="side-nav-parent">
                <div className="side-nav-top">

                    <div className="sideMenuCloseIcon" id="Close-button" onClick={closeSideBar}>
                        <Button id="Close-button"> <ArrowForwardIosIcon className="close-button" fontSize="medium" /> </Button>
                    </div>

                </div>

                <div className="side-nav">
                    <Button className="nav-button" variant="outlined" color="primary" onClick={closeSideBar} > Home    </Button>
                    <Button className="nav-button" variant="outlined" color="primary" onClick={closeSideBar} > About us    </Button>
                    <Button className="nav-button" variant="outlined" color="primary" onClick={closeSideBar} > Objects    </Button>
                    <Button className="nav-button" variant="outlined" color="primary" onClick={closeSideBar} > Our Projects    </Button>
                    <Button className="nav-button" variant="outlined" color="primary" onClick={closeSideBar} > Contact    </Button>
                </div>
            </div>


        </div>
    )
}
