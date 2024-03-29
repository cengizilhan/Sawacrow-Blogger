import React from 'react'
import "./ArticleDetailBottom.scss";
import twitterIcon from "../../Assets/Multimedia/twitter.svg";
import facebookIcon from "../../Assets/Multimedia/facebook.svg";
import eyesIcon from "../../Assets/Multimedia/eyes.svg";

export default function ArticleDetailBottom(author) {
  return (
    <section className='articleDetailBottom'>
        <span className='d-block d-sm-none articleDetailBottom__share'>Share:</span>
<section className='articleDetailBottom__firstRow'>
    
    <a target="_blank" href={'http://www.facebook.com/share.php?u='+window.location.href}>
        <img src={facebookIcon} alt="" />
        
        <span>Share on Facebook</span>
        </a>
    <a target="_blank" href={'https://twitter.com/intent/tweet?url='+window.location.href}>
        <img src={twitterIcon} alt="" />
        
        <span>Share on Twitter</span>
        </a>
    
</section>
<section className='articleDetailBottom__secondRow '>
    <div className='d-none'>
    <span>Tags:</span>

    <a href="/#">sss</a>
    <a href="/#">sss</a>
    </div>
</section>
<div className='articleDetailBottom__Hrdottet'></div>
<section className='articleDetailBottom__thirdRow'>
    <img src={author.author.img} 
    alt="" />
    {//console.warn("descrip",author.author)
    }
    <p dangerouslySetInnerHTML={{__html: author.author.description===""?'This user will fill his description.':author.author.description}}></p>
    
</section>

<section className='articleDetailBottom__eyeLine'>
    <div>
    <img width={82} height={65} src={eyesIcon} alt="" />
    </div>
    
</section>





    </section>
  )
}
