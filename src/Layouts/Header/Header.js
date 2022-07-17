import {React, useEffect} from 'react'
import logo from '../../Assets/Multimedia/NORDICROSE.svg'

import './Header.scss'
//import ScriptTag from 'react-script-tag';
import NavMenu from '../MobileMenu/NavMenu'

export default function Header() {

  

  return (
    <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className="container">
        <div className="row">
            <div className="col header__left">
                <a href="./">
                <img src={logo} width={290} height={27} alt="logo" className='img-fluid img-logo' />
                </a>
                
              
            </div>
            <div className="col-auto header__right ">
               
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

