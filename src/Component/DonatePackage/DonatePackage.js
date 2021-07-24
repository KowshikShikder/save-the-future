import { Button } from '@material-ui/core'
import React from 'react'
import './DonatePackage.css'


export default function DonatePackage() {
    return (
        <>

            <div className="title title-donate"> Donate Us </div>
            <div className="package-main">
                
                <div className="package">
                    <div className="package-titles"> One Time   </div>
                    <div className="package-amount"> 200$    </div>
                    <div className="package-for"> Build shelter for children </div>
                    <Button className="package-button" variant="outlined" color="primary"> Donate </Button>
                </div>
                
                <div className="package">
                    <div className="package-titles"> Yearly   </div>
                    <div className="package-amount"> 100$    </div>
                    <div className="package-for"> Buy educational accessories </div>
                    <Button className="package-button" variant="outlined" color="primary"> Donate </Button>
                </div>
                
                <div className="package">
                    <div className="package-titles"> Monthly   </div>
                    <div className="package-amount"> 60$    </div>
                    <div className="package-for"> Feed 20 children 3 meals </div>
                    <Button className="package-button" variant="outlined" color="primary"> Donate </Button>
                </div>



            </div>
        </>
    )
}
