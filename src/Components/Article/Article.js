import {React, useEffect, useState }from "react";
import './Article.scss'
import axios from "axios";



export default function Article(props) {
  const [imgUrl, setimgUrl] = useState([])


  useEffect(() => {
    


    axios.get(`https://dummyblog.cengizilhan.com/wp-json/wp/v2/media/${props.featured_media}`).then(function (response) { // handle success
    console.log(response.data.media_details.sizes.full.source_url);
    setimgUrl(response.data.media_details.sizes.full.source_url);
    
    
  });
  

  }, [])



  return (
    <section className='article__container'>
      <a href="/#">

        
        <div className='article__container__image'>
            <img className='img-fluid' width="401" height="232" alt="bla bla"
             src={imgUrl}></img>
        </div>
        <div className='article__container__text'>
            <span>{props.title.rendered}</span>
            
            </div>
            </a>
    </section>
  )
}
