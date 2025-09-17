import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/img/next-icon.png';
import back_icon from '../../assets/img/back-icon.png';
import user_1 from '../../assets/img/user-1.png';
import user_2 from '../../assets/img/user-2.png';
import user_3 from '../../assets/img/user-3.png';
import user_4 from '../../assets/img/user-4.png';

const Testimonials = () => {

  const slider = useRef();
  let tx = 0; 
 
 const slideForward = () => {
  if(tx > -50){
    tx -= 25;
  }

  slider.current.style.transform = `translateX(${tx}%)`;
 }
 const slideBackward = () => {
  if(tx < 0){
    tx += 25;
  }

  slider.current.style.transform = `translateX(${tx}%)`;
 } 

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="next icon" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="back icon" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="Student Photo" />
                <div>
                  <h3>Maria Rodriguez</h3>
                  <span>Chicago, USA</span>
                </div>
              </div>
              <p>The professors here are truly exceptional. Their mentorship and challenging courses prepared me to think critically and succeed in my career. I'm grateful for the top-notch education I received.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="Student Photo" />
                <div>
                  <h3>David Chen</h3>
                  <span>New York, USA</span>
                </div>
              </div>
              <p>This university was a life-changing experience. The vibrant campus community and diverse opportunities helped me grow both personally and professionally, while building friendships that will last a lifetime.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="Student Photo" />
                <div>
                  <h3>Sarah Miller</h3>
                  <span>Boston, USA</span>
                </div>
              </div>
              <p>The career services and hands-on projects here are outstanding. Thanks to the practical skills I learned, I was able to land my dream job right after graduation. This university gave me the competitive edge I needed.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="Student Photo" />
                <div>
                  <h3>James Wilson</h3>
                  <span>Los Angeles, USA</span>
                </div>
              </div>
              <p>The faculty here are amazing mentors who genuinely care about student success. Their guidance and the innovative campus culture helped me achieve all my academic goals. I'm grateful for their support.</p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Testimonials
