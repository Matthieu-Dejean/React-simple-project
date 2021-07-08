import React, {useState} from 'react';
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import './navbar.css';
import { IconContext } from 'react-icons';
import { AllData } from './AllData';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <HiIcons.HiMenu onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/">Home</Link>
                    </li>
                    {AllData.posts.map((nav) => 
                        <li className="nav-text">
                            <Link to={"/post/"+nav.id}>Post {nav.id}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
