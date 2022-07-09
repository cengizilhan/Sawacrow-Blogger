import React from 'react'
import './ArticleHero.scss'
import heroImg from '../../Assets/Multimedia/article-hero.jpg';

export default function ArticleHero() {
  return (
    
    <section className='articleHero text-center'>
      <a href="/#">
        <img src={heroImg} className='img-fluid' width="854" height="553" alt="herobanner"></img>
        <div className=' px-4 px-sm-5'>
        <h1>A few words about this blog platform, Ghost, and how this site was made</h1>
        <p>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
        </div>
        <div className='hr-line mx-0 mx-sm-5'></div>
        </a>
        </section>
        
  )
}
