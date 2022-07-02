import React from 'react'
import logo from '../../Assets/Multimedia/NORDICROSE.svg'
import './Header.scss'

export default function Header() {
  return (
    <header>
    <div className="container">
        <div className="row">
            <div className="col header__left d-center">
                <a href="./">
                <img src={logo} alt="logo" className='img-fluid img-logo' />
                </a>
                
              
            </div>
            <div className="col header__right">
                <ul>
                    <li><a href="#/blog">BLOG</a></li>
                    <li><a href="#/about">ABOUT</a></li>
                    <li><a href="#/link">LINKS</a></li>
                    <li><a href="#/pros">PROJECTS</a></li>
                </ul>
            </div>
        </div>
    </div>
    </header>
  )
}
