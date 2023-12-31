import React, { useRef } from "react";
import './contact.css';
import GitIcon from '../../assets/git.png'
import InstaIcon from '../../assets/instagram.png'
import LinkedinIcon from '../../assets/linkedin.png'
import EmailIcon from '../../assets/email.png'
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_13gby9z', 'template_oprs3nl', form.current, '6VZRuh5c6syeq8jx6')
            .then((result) => {
               console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
        };
        
        return(
        <section className="contactPage">
            <div id="activity">
                <h1 className="contactPageTitle">Other Activities</h1>
                <p className="activityDes">IEEE Computer society treasurer , Developer in college club, research work and more in processing</p>
                <button className="btns">
                    <button className="bbtn">Treasurer</button>
                    <button className="bbtn">Developer</button>
                    <button className="bbtn">Research paper</button>
                   <a href="https://flowcv.com/resume/n2hdswalph"><button className="bbtn"  >Get Resume</button></a>
                </button>
            </div>
            <br /><br />
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="activityDes">Please fill this form if having any query or opportunity.</span>
                <form  className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your name" name="your_name" />
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" name="message"  rows="5" placeholder="Your message" ></textarea>
                    <button type="reset" value="Send" className="submitBtn" >Submit</button>
                    <div className="links">
                       <a href="https://www.instagram.com/gupta_arpit_/"> <img src={InstaIcon} alt="LinkImg" className="link" /></a>
                        <a href="https://github.com/arpit3334"><img src={GitIcon} alt="LinkImg" className="link" /></a>
                        <a href="https://www.linkedin.com/in/arpitgupta210566/"><img src={LinkedinIcon} alt="LinkImg" className="link" /></a>
                        <a href="mailto: guptaarpit3334@gmail.com"><img src={EmailIcon} alt="LinkImg" className="link" /></a>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Contact;
