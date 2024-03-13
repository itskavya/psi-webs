// Home.js
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Styles/Home.css';
import Earth from '../images/Earth.jpg';
import Mobile from '../images/Mobile1.png';
const SliderContainer = () => {  
    return (
      <div className="sliderContainers">
        <img src={Earth} alt="Earth" className='sliderImage' />
      </div>
    );
  };
  const Provide = () => {
    return(
        <div className='provide_sec'>
        <div className='provide'>
            <h1 className='provide_h'>What we Provide?</h1>
    
        </div>
        </div>

    );

  };
  const Featured = () => {
    return (
      <div className="eventsSection">
        <div className="eventCard">
          <div className="eventCardContent">
            <h3 className="eventTitle">Mobile App Development By Flutter </h3>
            <p className="eventDescription">Event description goes here.</p>
            <button>Read More  </button>
          </div>
          <img className="eventImage" src={Mobile} alt="Event Image" />
        </div>
      </div>
    );
  
  };
class Home extends Component {
  render() {
    return (
      <div className='home'>
         <SliderContainer />
        <NavBar />
        <Provide />
        <Featured />
      </div>
    );
  }
}

export default Home;