import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
        <>
            <div className="project-main">
            <div className="title title-project"> Our Projects </div>
                
                <div className="project-parent">
                    <div className="project-img"> 
                        <img src={`${window.location.origin}/save-the-future/Image/project1.jpg`} alt="" className="image" />
                    </div>
                    <div className="project-details"> 
                    <span> Street children </span>
                    <p> There are about more than 100 million street children worldwide. we are working with them. Try to provide shelter and other facilities as much as we can. </p>
                    
                    </div>
                </div>

                <div className="project-parent">
                <div className="project-details"> 
                    <span> Education </span>
                    <p> Education is the fundamental rights of a children. Without eduction a children is blind. We are conducting child education activities in 12 countries. </p>
                    
                    </div> 
                    <div className="project-img"> 
                        <img src={`${window.location.origin}/save-the-future/Image/project3.jpg`} alt="" className="image" />
                    </div>
                </div>

                <div className="project-parent">
                    <div className="project-img"> 
                        <img src={`${window.location.origin}/save-the-future/Image/project2.jpg`} alt="" className="image" />
                    </div>

                    <div className="project-details"> 
                    <span> Hunger Children </span>
                    <p> Each year about 3.1 million children die from undernutrition (UNICEF, 2018). 66 million primary school-age children attend classes hungry across the world. </p>
                    
                    </div>
                </div>





            </div>
        </>
    )
}
