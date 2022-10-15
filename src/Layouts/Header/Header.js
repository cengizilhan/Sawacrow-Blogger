import {React, useEffect} from 'react'
import logo from '../../Assets/Multimedia/NORDICROSE.svg'
import '../../Assets/Vendors/Hover-master/css/hover.css'
import {gsap} from 'gsap'
import './Header.scss'
import NavMenu from '../MobileMenu/NavMenu'
import {Link } from "react-router-dom";

export default function Header() {

    useEffect(() => {
        gsap.from('.img-logo', {duration: 1, y: -100, opacity: 0, ease: 'bounce.out'})
        gsap.from('.header__right', {duration: 1, y: -100, opacity: 0, ease: 'bounce.out'})
    }, [])
  

  return (
    <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className="container">
        <div className="row">
            <div className="col header__left">
                
                <Link to="/" className='hvr-bounce-to-bottom'>
                <img src={logo} width={290} height={27} alt="logo" className='img-fluid img-logo' />
                </Link>
                
                
              
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

