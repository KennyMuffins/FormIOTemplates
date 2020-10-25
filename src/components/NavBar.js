import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './NavBar.css'

function NavBar() {
    const[click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerHeight <= 1960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                 <div className="navbar-container">
                     <div className="menu-icon" onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                     </div>
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/formbuilderone' className='nav-links' onClick={closeMobileMenu}>
                                Builder
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/formembeddedone' className='nav-links' onClick={closeMobileMenu}>
                                Embedded
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/formplaylist' className='nav-links' onClick={closeMobileMenu}>
                                Playlist
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resourcesong' className='nav-links' onClick={closeMobileMenu}>
                                Add Song
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/formpdf' className='nav-links' onClick={closeMobileMenu}>
                                Export PDF
                            </Link>
                        </li>
                     </ul>
                 </div>
            </nav> 
        </>
    )
}

export default NavBar
