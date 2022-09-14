import {React, useEffect, useState }from "react";
import './Article.scss'
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderSvg from "../../Assets/Multimedia/placeholder.svg";


export default function Article(props) {
  const [imgUrl, setimgUrl] = useState([])

  //console.error('sawacrow')
  useEffect(() => {
  
    


    axios.get(`https://dummyblog.cengizilhan.com/wp-json/wp/v2/media/${props.featured_media}`).then(function (response) { // handle success
    setimgUrl(response.data.media_details.sizes.full.source_url);

    
  });

  }, )



  return (
    <section className='article__container'>
      <a href={'./article/'+props.id}>


        
        <div className='article__container__image'>
                          <LazyLoadImage
                  wrapperClassName=" mx-auto d-block"
                  alt="article img"
                  placeholderSrc={PlaceholderSvg}
                  width={401}
                  height={232}
                  className="img-fluid sawacrow"

                  src={imgUrl}  key={imgUrl}
                  />

            
        </div>
        <div className='article__container__text'>
            <span>{props.title.rendered}</span>
            
            </div>
            </a>
    </section>
  )
}
