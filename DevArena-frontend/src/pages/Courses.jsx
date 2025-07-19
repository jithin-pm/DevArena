import React from 'react'
import '../styles/courses.css'

function Courses() {
    return (
        <div className='courses-main' >
            <div className="courses-title-section">
                <h1>Explore Our Game Dev Courses</h1>
                <p>Unlock your creativity with hands-on courses in game design, coding,
                    and interactive storytelling. Learn the tools and techniques used by
                    professionals in the gaming industry.</p>
            </div>

            <div className='course-cards-section' >
                <div className='course-cards' >
                    <i class="fa-brands fa-unity"></i>
                    <div className='course-cards-text' >
                        <h1>Unity Game Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente autem cupiditate
                            maxime enim</p>
                        <h6>Duration : 1 Year</h6>
                    </div>
                </div>
                <div className='course-cards' >
                    <i class="fa-brands fa-fantasy-flight-games"></i>
                    <div className='course-cards-text' >
                        <h1>Unreal Engine Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente autem cupiditate
                            maxime enim</p>
                        <h6>Duration : 6 Months</h6>
                    </div>
                </div>
                <div className='course-cards' >
                    <i className="fa-brands fa-playstation"></i>
                    <div className='course-cards-text' >
                        <h1>Game Design Fundamentals</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente autem cupiditate
                            maxime enim</p>
                        <h6>Duration : 2 Months</h6>
                    </div>
                </div>
                <div className='course-cards' >
                    <i class="fa-solid fa-meteor"></i>
                    <div className='course-cards-text' >
                        <h1>2D & 3D Game Art</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente autem cupiditate
                            maxime enim</p>
                        <h6>Duration : 8 Months</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Courses
