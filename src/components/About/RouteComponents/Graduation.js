import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ducation</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>RK UNIVERSITY</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;08/2021 - Pursuing</h2>
                        <p>Pursued B.Tech in Computer Science Engineering from 'RK UNIVERSITY' with current CGPA: 8.15.</p><br/>
                        <h1>HETAUDA SCHOOL OF MANAGEMENT AND SOCIAL SCIENCE</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;2019 - 2021</h2>
                        <p>Completed my Intermediate Examination from Hetauda School of Management and Social Science in Science Stream with 74.75%.</p><br/>
                        <h1>MERRY GOLD SECONDARY BOARDING SCHOOL</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;2006 - 2019</h2>
                        <p>I have completed my Secondary Level Examination from Merry Gold Secondary Boarding School with 80%.</p>
                    </div>

                   
                    
                </div>
            </div>
        </>
    )
}

export default Graduation