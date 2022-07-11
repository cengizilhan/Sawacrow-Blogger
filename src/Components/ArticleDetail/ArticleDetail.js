import React from 'react'
import './ArticleDetail.scss'
import heroImg from '../../Assets/Multimedia/article-hero.jpg';
import twitterIcon from '../../Assets/Multimedia/twitter.svg';
import facebookIcon from '../../Assets/Multimedia/facebook.svg';

export default function ArticleDetail() {
  return (
    <section className='articleDetail'>
    
        <h1>
        A few words about this blog platform, Ghost, and how this site was made
        </h1>
        <span className='articleDetail__subheader'>
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </span>
        <img src={heroImg} className='articleDetail__heroimg' alt="herobanner"></img>
        <section className='articleDetail__wrapper container'>
        <div className="articleDetail__hr"></div>
        <section className='articleDetail__author-container'>
          <div className='articleDetail__author-left'>
            
            <img src="https://images.unsplash.com/photo-1657491784312-cf194c7d08fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
             className='img-fluid' alt="author"></img>
             <div> <span>Mika Matikainen</span>
             <span>Apr 15, 2020 · 4 min read</span></div>
          </div>
          <div className='articleDetail__author-right'>
            <a href="/#"><div><img src={twitterIcon} alt="" /></div></a>
            <a href="/##"><div><img src={facebookIcon} alt="" /></div></a>
            
            
            
            
          </div>
        </section>
        </section>
    </section>
    
  )
}
