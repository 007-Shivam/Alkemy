import React from 'react';
import '../styles/Contact.css'

import Footer from '../components/footer/FooterComponent'

export default function Contact() {
    return (
        <>
            <div className='contact_section'>
                Contact Us
            </div>
            <div className='contact_sec'>
                <div className='con'>
                    <p className='con_head'>Address</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <p className='con_head'>Contact Number</p>
                    <p>+91 9874563210 </p>
                </div>

                
            </div>

            <Footer />

        </>
    )
}