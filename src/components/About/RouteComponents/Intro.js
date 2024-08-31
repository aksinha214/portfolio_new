import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span><b>AJAY KUMAR SINHA</b></span></p>
                        <p data-aos='fade-right' data-aos-delay='100'>*I enjoy building websites and always enthusiastic about creating new front-end features.</p>
                        <p data-aos='fade-right' data-aos-delay='200'>*Passionate Software Developer with more than 2.5 years of experience in developing highly adaptive and responsive websites using React.js</p>
                        <p data-aos='fade-right' data-aos-delay='300'>*I have understanding of server side development using Node.js, Express.js and MongoDB.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>*I have 1.5 years of experienceof developing Android Applications using Kotlin, Firebase Console and Retrofit.</p>
                        <p data-aos='fade-right' data-aos-delay='500'>*I have previously worked at different projects  where I successfully completed.  </p>
                        <p data-aos='fade-right' data-aos-delay='600'>*I constantly strive to expand my knowledge and stay ahead of industry trends.</p>
                        <p data-aos='fade-right' data-aos-delay='700'>*My goal is to leverage my skills, experience, and passion to contribute to a dynamic and innovative organization.</p>
                        <p data-aos='fade-right' data-aos-delay='800'>*I am deeply committed to driving success by leveraging my expertise within teams and fostering collaborative environments.</p>

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro