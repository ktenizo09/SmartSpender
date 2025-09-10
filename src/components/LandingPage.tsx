import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionTab } from 'primereact/accordion';
import "primereact/resources/themes/lara-light-cyan/theme.css";



import './LandingPage.css';
function LandingPage() {
    return (
        <>
            <div className="landing_page-container">
                <div className="title-container">
                    <h1 className='landing_page-title'>
                        Welcome to SmartSpender!
                    </h1>
                    <h2>
                        Your one-stop solution for managing and improving your student finances.
                    </h2>
                    <br />
                    <br />
                    <h3>Get Started</h3>
                    <div className="button-group">
                        <Link to="/sign-up" className='btnSignUp'>Sign Up</Link>
                        <Link to="/sign-in" className='btnSignIn '>Sign In</Link>
                    </div>
                </div>
            </div>

            <div className="landing_page-content">
                <h1>Features</h1>
                <Accordion multiple className='accordion'>
                    <AccordionTab header="Budget Calculator">
                        <p>Our budget calculator helps you track your income and expenses, set financial goals, and create a personalized budget plan.</p>
                    </AccordionTab>
                    <AccordionTab header="Job Portal" >
                        <p className='accordion-tab'>Find part-time jobs, internships, and freelance opportunities that fit your schedule and skills, granting you the opportunity to develop your financial stability.</p>
                    </AccordionTab>
                    <AccordionTab header="Forum" >
                        <p>Join our community of students to share tips, ask questions, and discuss financial topics.</p>
                    </AccordionTab>
                </Accordion>
            </div>


        </>
    )
}

export default LandingPage
