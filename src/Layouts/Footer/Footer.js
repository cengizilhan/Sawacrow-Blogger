import React from 'react'
import './Footer.scss';
import logo from '../../Assets/Multimedia/NORDICROSE.svg'

export default function Footer() {
  return (
    <footer>
       <div className='footer__textcontainer marquee'>
<span>DIGITAL PRODUCT DESIGN</span>
<span>REMOTE WORK</span>
<span>UX DESIGN</span>
<span>DISTRIBUTED TEAMS</span>
<span>CREATIVITY</span>
<span>STRATEGY</span>
<span>SUSPENSE</span>
<span>GROWTH</span>

       </div>
       <section className='footer__card'>
        <img className='footer__card-img img-fluid' src={logo} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
       </section>

       <section className='footer__links-container'>
        <a href="/#">Twitter</a>
        <a href="/#">Linkedin</a>
        <a href="/#">RSS</a>
       </section>
    </footer>
  )
}
