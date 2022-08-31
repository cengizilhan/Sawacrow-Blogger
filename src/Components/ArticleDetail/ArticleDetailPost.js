import React from 'react'
import './ArticleDetailPost.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderSvg from '../../Assets/Multimedia/placeholder.svg';

export default function ArticleDetailPost() {
  return (
    <a  href="/#" className='articleDetailPost '>
        
            
      <LazyLoadImage  wrapperClassName=""
              alt=" " 
              placeholderSrc={PlaceholderSvg}
              
              width={293} height={195}
              
              className="img-fluid"
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              
           
              
        />

    <span>Connecting artificial intelligence with digital product design</span>
    </a>
  )
}
