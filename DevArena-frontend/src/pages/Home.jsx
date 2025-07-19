import React from 'react'
import Header from '../components/Header'
import '../styles/home.css'
import HomeImage from '../assets/Home-image.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-main' >
      <div className='home-intro' >
        <div className='home-intro-image' >
          <img src={HomeImage} alt="" />
        </div>
        <div className='home-intro-text' >
          <h2>
            The battleground for  future game developers.
          </h2>
          <p>Step into a world where passion meets purpose. At our Game Development Training Center,
            you’ll learn to design, code, and create immersive gaming experiences using industry-leading
            tools like Unity and Unreal Engine. Whether you're a beginner or ready to go pro, this is where
            your game development journey begins.</p>
          <Link to="/courses" style={{ textDecoration: "none" }} >
            <div className='btn-section' >
              <div className='btn' >Explore Courses <i className="fa-solid fa-arrow-right" style={{ color: "#ffff", paddingLeft: "7px" }}></i></div>
            </div>
          </Link>

        </div>
      </div>
    </div>

  )
}

export default Home
