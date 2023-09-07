import React from  'react';
import './work.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works =() =>{
    return(
        <section className="works">
           <h2 className="worksTitle">My Portfolio</h2>
           <span className="worksDes">Chating interface, Decentralized social media app, Portfolio website, web designing, and many more in upcoming</span>
           <div className="worksImgs">
            <img src={Portfolio1} alt="Img1" className="worksImg" />
            <img src={Portfolio2} alt="Img2" className="worksImg" />
            <img src={Portfolio3} alt="Img3" className="worksImg" />
            <img src={Portfolio4} alt="Img4" className="worksImg" />
            <img src={Portfolio5} alt="Img5" className="worksImg" />
            <img src={Portfolio6} alt="Img6" className="worksImg" />
           </div>
           
           <button className="worksBtn">See More</button>
        </section>
    )
}

export default Works;