import React, {useState} from 'react';
import './navbar.css'
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'
import menu from "../../assets/menu.png"

const Navbar =() => {
    const [showMenu ,setShowMenu] = useState(false);
    return(
        <nav className='navbar'>
            <a href=".intro"> <img src={logo} alt="Logo" className='logo' /></a>
            <div className="navmenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration ={500}className="navMenuListItem">Home</Link>
                <Link activeClass='active' to='activity' spy={true} smooth={true} offset={-70} className="navMenuListItem">Activies</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} className="navMenuListItem">Skills</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} className="navMenuListItem">Portfolio</Link>
            </div>
            <button className="navContact" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="navbarImg"  />Contact Me
            </button>


            <img src={menu} alt="Menu" className='mobMenu'onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration ={500}className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='activity' spy={true} smooth={true} offset={-70} className="listItem" onClick={()=>setShowMenu(false)}>Activies</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>

    )
}

export default Navbar