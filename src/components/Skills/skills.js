import React from 'react';
import './skills.css';
import MERN from '../../assets/mern.png';
import Blockchain from '../../assets/blockchain.jpg';
import AppDesign from '../../assets/app-design.png';
const Skills=()=>{
    return(
        <section className='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">Gaining specialition in Blockchain Development, creating secure decentralized applications and smart contracts. Additionally, I excel in Full Stack Web Development, crafting innovative, user-friendly web solutions encompassing both front-end and back-end development. Furthermore, I'm dedicated to Cybersecurity, implementing robust security measures, conducting vulnerability assessments, and deploying proactive strategies to safeguard digital assets. My mission is to drive innovation while ensuring security and usability in the ever-evolving digital landscape</span>
            <div className="skillBars">
                    <div className="skillBar">
                        <img src={MERN} alt="MERN Developer" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>MERN Development</h2>
                            <p>It contain my project on Full stack web development</p>
                        </div>
                        
                    </div>
                    <div className="skillBar">
                        <img src={Blockchain} alt="Blockchain Developer" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Blockchain Development</h2>
                            <p>It contain my WEB 3.0 project</p>
                        </div>
                        </div>
                    <div className="skillBar">
                        <img src={AppDesign} alt="App Developer" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Extra Skills</h2>
                            <p>It contain my developing skills and other work</p>
                        </div>
                        </div>   
                    </div>    
        </section>
        
    );
}

export default Skills