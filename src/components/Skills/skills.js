import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills=()=>{
    return(
        <section className='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">Lorem ipsum dolor sit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, error!</span>
            <div className="skillBars">
                    <div className="skillBar">
                        <img src={UIDesign} alt="MERN Developer" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>MERN Development</h2>
                            <p>It contain my project on Full stack web development</p>
                        </div>
                        
                    </div>
                    <div className="skillBar">
                        <img src={WebDesign} alt="Blockchain Developer" className="skillBarImg" />
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