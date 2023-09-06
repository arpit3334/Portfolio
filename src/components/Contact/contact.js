import React, {useRef} from "react";
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
    
        emailjs.sendForm('service_13gby9z', 'service_13gby9z', form.current, 'QDfdlOGNj9ohBZkti9MsC')
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
                <p className="activityDes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat consequatur animi, architectoiditate et id laboriosam ab tempore sit quidem sapiente saepe molestias.</p>
                <button className="btns">
                    <button className="bbtn">Treasurer</button>
                    <button className="bbtn">Developer</button>
                    <button className="bbtn">Research paper</button>
                    <button className="bbtn">Get Resume</button>
                </button>
            </div>
            <br /><br />
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="activityDes">Please fill this form if having any query or opportunity.</span>
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your name" name="your_name" />
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" name="message"  rows="5" placeholder="Your message" ></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={InstaIcon} alt="LinkImg" className="link" />
                        <img src={GitIcon} alt="LinkImg" className="link" />
                        <img src={LinkedinIcon} alt="LinkImg" className="link" />
                        <img src={EmailIcon} alt="LinkImg" className="link" />
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Contact;