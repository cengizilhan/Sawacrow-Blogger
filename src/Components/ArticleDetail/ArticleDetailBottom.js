import React from 'react'
import "./ArticleDetailBottom.scss";
import twitterIcon from "../../Assets/Multimedia/twitter.svg";
import facebookIcon from "../../Assets/Multimedia/facebook.svg";

export default function ArticleDetailBottom() {
  return (
    <section className='articleDetailBottom'>
        <span className='d-block d-sm-none articleDetailBottom__share'>Share:</span>
<section className='articleDetailBottom__firstRow'>
    
    <a href="/#">
        <img src={facebookIcon} alt="" />
        
        <span>Share on Facebook</span>
        </a>
    <a href="/#">
        <img src={twitterIcon} alt="" />
        
        <span>Share on Twitter</span>
        </a>
    
</section>
<section className='articleDetailBottom__secondRow'>
    <span>Tags:</span>
    <a href="/#">sss</a>
    <a href="/#">sss</a>
</section>
<div className='articleDetailBottom__Hrdottet'></div>
<section className='articleDetailBottom__thirdRow'>
    <img src="https://images.unsplash.com/photo-1657491784312-cf194c7d08fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
    alt="" />
    <p>Mika Matikainen is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  </p>
</section>



    </section>
  )
}
