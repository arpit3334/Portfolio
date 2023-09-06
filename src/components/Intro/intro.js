import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro=()=>{
    return(
        <section className="intro">
            <div className="introContent">
                <span className="hello">Hello </span>
                <span className="introText">I'm <span className="nameText">Arpit </span> <br /> <span className='innerText'>MERN & Blockchain Developer</span> </span>
                <p className="introPara">Skilled and passionate about my work <br/> & learning with web 3.0</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' /> Hire me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro