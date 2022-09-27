import React from 'react'
import './SkeletonArticle.scss'
import PlaceholderSvg from "../../Assets/Multimedia/placeholder.svg";

export default function SkeletonArticle() {
  return (
    <section className='SkeletonArticle placeholder-glow"'>
    


      
    
    <svg className="bd-placeholder-img card-img-top" width="401" height="232" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
      <div className='article__container__text placeholder-glow text-center'>
      <span className="placeholder col-12 mt-4"></span>
      <span className="placeholder col-5 mx-auto mt-2"></span>
          
          </div>
         
  </section>
  )
}
