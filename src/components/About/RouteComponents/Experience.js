import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
// import Myself from '../../assets/images/myself.jpg';


const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>


                    </div>



                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>SharepointEmpower pvt. ltd.</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;24/06/2024 - PRESENT</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Developing multiple highly responsive and adaptive website</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Managing and implement new updates on <b>Company Products.</b></span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Developing new user-facing features</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Building reusable code</span>
                                    </li>
                                </ul>
                            </div>

                            {/* You can put this repeated code as a child component similar to internship.js  */}
                            <div className="experience__box">
                                <h2>IDEATION - 24hrs HACKATHON</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;23-24/02/2024</h3>
                                <ul>
                                    <p>Project :-</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Developing mobile charting App <b>Orient-Connect App</b> using Kotlin, Firebase Console and Retrofit.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset="-5000">
                                        <span>Responsible for Frontend, Backend and Database</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600' data-aos-offset="-5000">
                                        <span>1st-Runner-Up</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>Arch-A-Thon 2022 - 24hrs HACKATHON</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;11/03/2022</h3>
                                <ul>
                                    <p>Project :-</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Developing multiple highly responsive and adaptive <b>Placement Portal</b> website using HTML5, CSS3, JavaScript, JQuery and PHP</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset="-5000">
                                        <span>Responsible for Frontend and Database</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600' data-aos-offset="-5000">
                                        <span>Runner-Up</span>
                                    </li>

                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>IoT HackFest 2022 - 24hrs HACKATHON</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;29/04/2022</h3>
                                <ul>
                                    <p>Project :-</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Developing multiple highly futuristict <b>Smart Stick</b> using Arduino UNO and Internet of Things</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset="-5000">
                                        <span>Responsible for implementing features and coding.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600' data-aos-offset="-5000">
                                        <span>2nd Runner-Up</span>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience