import React from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import Card from '../components/Card';
import {HiLightBulb} from "react-icons/hi";
import {BsCalendarFill} from "react-icons/bs";
import {BiSupport} from "react-icons/bi";
import {SiGooglemessages} from "react-icons/si";

import "../styles/sections/About.scss";

function About() {
  return (
    <div className='about-container' id='about'>
        <div className="container">
            <div className="details">
                <Title title="About CRYO" color="blue"/>
                <p>
                    We believe that everyone deserves to have a website or online store. Innovation and simplicity make us happy. Our Mission is to help people achieve what they passionate about it
                </p>
                <p>
                    We are excited to simplify SEO for everyone through software, education or community.
                </p>
                <Button content="Why CRYO?" />
            </div>
            <div className="cards">
                <Card title="Innovative Ideas" logo={<HiLightBulb />} />
                <Card title="Planning" logo={<BsCalendarFill />} />
                <Card title="Communication" logo={<BiSupport />} />
                <Card title="24 * 7 Support" logo={<SiGooglemessages/>} />
            </div>
        </div>
    </div>
  );
}

export default About;