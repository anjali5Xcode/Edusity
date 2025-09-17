import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/img/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> We Ensure Better education for a better world</h1>
        <p>We empower the next generation of leaders with a world-class education. By focusing on hands-on experience and cutting-edge research, we equip students with the critical thinking skills needed to solve real-world problems and build a better future.</p>
          <button className='btn'> Explore More <img src={dark_arrow} alt="Dark Arrow Symbol" /></button>
      </div>
      
    </div>
  )
}

export default Hero
