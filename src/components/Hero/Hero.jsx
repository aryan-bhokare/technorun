import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";
import img1 from '../../assets/homepage.png';
import img2 from '../../assets/mobile-image.png'; // Import your mobile image
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 724); // Set the breakpoint according to your needs
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles['banner-img']}>
        <img src={isMobile ? img2 : img1} alt="Banner" />
      </div>
      <div className={styles['banner-text']}>

        <h2>Run the Future</h2>
        
        <p>
          Embrace the Tech, Ignite Your Stride: Join Us at TechnoRun 
          Where Every Step is a Celebration of Fitness and Innovation in the Heart of Amravati!
          
        </p>
        <p>Save the Date: January 28, 2024
        <br />
          <b>Fees only 350 INR</b>
        </p>
        <NavLink to="/register">Register Now</NavLink>
        
        

      </div>
    </>
  );
};

export default Hero;
