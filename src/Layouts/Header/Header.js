import {React, useEffect} from 'react'
import logo from '../../Assets/Multimedia/NORDICROSE.svg'

import './Header.scss'
//import ScriptTag from 'react-script-tag';
import NavMenu from '../MobileMenu/NavMenu'







export default function Header() {
    useEffect(() => {
  

    });
  

  return (
    <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className="container">
        <div className="row">
            <div className="col header__left d-center">
                <a href="./">
                <img src={logo} alt="logo" className='img-fluid img-logo' />
                </a>
                
              
            </div>
            <div className="col header__right ">
                <ul className="menu__desktop">
                    <li><a href="#/blog">BLOG</a></li>
                    <li><a href="#/about">ABOUT</a></li>
                    <li><a href="#/link">LINKS</a></li>
                    <li><a href="#/pros">PROJECTS</a></li>
                </ul>
                      
            
           
            </div>
            <div className='col-auto header__navmobile '>
            <NavMenu></NavMenu>
            
            {
                //<NavMenu></NavMenu>
            // burası ile ilgilenecek react responsive hata veriyor. 
            }
            </div>
            <section>
      
        


  
            </section>
        </div>
    </div>
    </header>
  )

  
}

