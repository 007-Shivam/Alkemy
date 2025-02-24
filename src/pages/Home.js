import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';


import Footer from '../components/footer/FooterComponent'
export default function Home() {
    return (
        <>
            <div className='hero_section'>
                <div className='hero_content'>
                    <h1 className='hero_name'>
                        Take the first step to knowledge with Us.
                    </h1>
                    <div className='hero_buttons'>
                        <Link to="/about" className='hero_btn'>Learn More</Link>
                        <Link to="/admission" className='hero_btn'>Explore Admissions</Link>
                    </div>
                </div>
            </div>

            <div className='info_section'>
                <div className='box'>
                    <h5>
                        100+
                    </h5>
                    <p>
                        Courses
                    </p>
                </div>
                <div className='box'>
                    <h5>
                        999+
                    </h5>
                    <p>
                        Students
                    </p>
                </div>
                <div className='box'>
                    <h5>
                        100+
                    </h5>
                    <p>
                        Courses
                    </p>
                </div>
                <div className='box'>
                    <h5>
                        999+
                    </h5>
                    <p>
                        Students
                    </p>
                </div>
                <div className='box'>
                    <h5>
                        100+
                    </h5>
                    <p>
                        Courses
                    </p>
                </div>
                <div className='box'>
                    <h5>
                        999+
                    </h5>
                    <p>
                        Students
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}