import React from 'react';
import about_img from '../../assets/img/about.png';
import play_icon from '../../assets/img/play-icon.png';
import './About.css';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="Student Image"  className='about_img'/>
        <img src={play_icon} alt=" Play Icon"  className='play_icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>A Foundation for a Brighter Future</h2>
        <p>As a leading institution committed to academic excellence, we strive to create an environment that inspires innovation, critical thinking, and a lifelong passion for learning. Our diverse community of students and faculty works together to tackle complex challenges and make a positive impact on the world.</p>

        <p>We offer a wide range of programs designed to prepare students for successful careers and meaningful lives. With state-of-the-art facilities and a supportive network of mentors and advisors, we are dedicated to helping each student reach their full potential.</p>
        
        <p>Our university is more than just a place of education—it's a vibrant hub for collaboration and personal growth. We encourage students to engage in research, participate in community service, and explore their interests beyond the classroom, fostering well-rounded individuals ready to lead in a global society.</p>
      </div>
    </div>
  )
}

export default About
