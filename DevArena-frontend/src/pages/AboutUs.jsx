import React from 'react'
import '../styles/about.css'
function AboutUs() {
    return (
        <div className='aboutUs-main' >
            <div className="aboutUs-text">
                <h1>About the Academy</h1>
            </div>
            <div className="about-contents">
                <div className="about-contents-intro">
                    <div className='name-logo'>
                        <i className="fa-brands fa-connectdevelop fa-2xl"></i>
                        <h1>DevArena</h1>
                    </div>
                    <div className='name-logo-text' >
                        <p>
                            Welcome to Devarena – the ultimate arena for aspiring game developers and digital creators. At Devarena,
                            we empower passionate individuals to turn their ideas into immersive realities through industry-relevant
                            courses, hands-on projects, and expert mentorship. From mastering engines like Unity and Unreal, to exploring
                            game design principles, 2D/3D art, and interactive storytelling, we provide a comprehensive learning journey
                            tailored for the future of gaming and interactive media.Join a community where innovation meets creativity, and
                            take your first step into the dynamic world of game development with Devarena.
                        </p>
                    </div>

                </div>
                <div className='our-mission' >
                    <h1>Our Mission</h1>
                    <div className="our-mission-contents">
                        <div className="our-mission-cards">
                            <i className="fa-solid fa-bullseye"></i>
                            <div>
                                <h3>Empower Future Creators</h3>
                                <p>Equip students with the skills and mindset to thrive in the game development industry.</p>
                            </div>
                        </div>
                        <div className="our-mission-cards">
                            <i className="fa-solid fa-brain"></i>
                            <div>
                                <h3>Inspire Innovation</h3>
                                <p>Foster creativity and critical thinking through hands-on learning experiences.</p>
                            </div>

                        </div>
                        <div className="our-mission-cards">
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                            <div>
                                <h3>Industry-Ready Training</h3>
                                <p>Deliver practical training using tools like Unity, Unreal Engine, and Blender.</p>
                            </div>
                        </div>
                        <div className="our-mission-cards">
                            <i className="fa-solid fa-globe"></i>
                            <div>
                                <h3>Build a Community</h3>
                                <p>Create a collaborative environment where developers can grow together.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='our-team' >
                    <h1>Our Team</h1>
                    <div className='our-team-contents' >
                        <div className='our-team-card'>
                            <i className="fa-solid fa-people-group"></i>
                            <div className='our-team-card-text' >
                                <h2>Expertise and dedication at the heart of Devarena.</h2>
                                <p>At Devarena, our strength lies in the remarkable individuals who form our team.
                                    From highly experienced software developers and visionary designers to skilled
                                    educators with a passion for teaching, our team members bring a wealth of real-world
                                    knowledge and creativity to the learning experience. Each professional is dedicated to
                                    delivering more than just theory — they offer insight, mentorship, and practical training
                                    rooted in current industry standards and emerging trends.
                                    We believe in personalized guidance, hands-on projects, and a collaborative learning
                                    environment where students can thrive. Whether it's guiding beginners through the foundations
                                    or challenging advanced learners with complex concepts, our team ensures that every student receives the
                                    support, motivation, and resources they need to succeed. At Devarena, we’re not just teaching —
                                    we’re building futures.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='our-goals' >
                    <h1>Our Goals</h1>
                    <div className='our-goals-contents' >
                        <div className="our-goals-cards">
                            <i className="fa-solid fa-palette"></i>
                            <div>
                                <h3>Inspire Creativity</h3>
                                <p>Empower students to think beyond the code encouraging innovation in design</p>
                            </div>
                        </div>
                        <div className="our-goals-cards">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <div>
                                <h3>Ensure Student Growth</h3>
                                <p>Track progress closely and support every learner’s journey with feedback, mentoring</p>
                            </div>
                        </div>
                        <div className="our-goals-cards">
                            <i className="fa-solid fa-bullseye"></i>
                            <div>
                                <h3>Lead with Vision</h3>
                                <p>Stay ahead of trends and technologies to guide our learners toward meaningful</p>
                            </div>
                        </div>
                        <div className="our-goals-cards">
                            <i className="fa-solid fa-book"></i>
                            <div>
                                <h3>Make Learning Practical</h3>
                                <p>Blend theory with hands-on projects to ensure real-world application</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs
