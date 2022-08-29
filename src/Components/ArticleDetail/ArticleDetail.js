import {React, useEffect, useState }from "react";
import { useParams } from 'react-router-dom';
import "./ArticleDetail.scss";
import heroImg from "../../Assets/Multimedia/article-hero.jpg";
import twitterIcon from "../../Assets/Multimedia/twitter.svg";
import facebookIcon from "../../Assets/Multimedia/facebook.svg";
import ArticleDetailBottom from "./ArticleDetailBottom";
import ArticleDetailBlogs from "./ArticleDetailBlogs";

import axios from "axios";

export default function ArticleDetail(props) {
  const articleid= useParams();

  const [imgUrl, setimgUrl] = useState([])
  const [post, setpost] = useState([])
  const [author, setauthor] = useState([])


  


// axios bu sayfada çalışmmıyor.
//çağrılan article js çalışmadığı zaman props'a data dolmuyor. dolayısıyla direk burası açılınca veri hiç gelmiyor aq normal.
  useEffect(() => {


    


    axios.get('https://dummyblog.cengizilhan.com/wp-json/wp/v2/posts/'+articleid.articleid)
    .then(function (response) {
      // handle success
      console.log(response);
    //  setpost(response.data);
    setpost({
      content: response.data.content.rendered,
     date: new Date(response.data.date).toLocaleDateString("en-US") ,
     date_modified: new Date(response.data.modified).toLocaleDateString("en-US"),
     title:response.data.title.rendered,
     subtitle:response.data.excerpt.rendered,
     tags: response.data.tags,
     img:imgUrl,
     userId:response.data.author,
     tags:response.data.tags,
     /*
     alt başlık
     
     author
     tags
     author açıklama */

     
   });
   // Fetch img url from another endpoint    
   axios.get(`https://dummyblog.cengizilhan.com/wp-json/wp/v2/media/${response.data.featured_media}`)
   .then(function (response) { // handle success
   setimgUrl(response.data.media_details.sizes.full.source_url);
});

axios.get(`https://dummyblog.cengizilhan.com/wp-json/wp/v2/users/${response.data.author}`)
.then(function (response) { // handle success
//setauthor(response);
console.warn('author',response);
setauthor({
  name:response.data.slug,
  img:response.data.avatar_urls[96],
  description:response.data.description
})
});


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    }) 
 
    


  

  }, [])

 


  return (
    <section className="articleDetail">
      
      <h1>
      
      <span dangerouslySetInnerHTML={{__html: post.title}}></span> 
      </h1>
      <span className="articleDetail__subheader">
        
      </span>
      <img
        src={imgUrl} loading="lazy"
        className="articleDetail__heroimg"
        alt="herobanner"
      ></img>
      <section className="articleDetail__wrapper container">
        <div className="articleDetail__hr"></div>
        <section className="articleDetail__author-container">
          <div className="articleDetail__author-left">
            <img
              src={author.img}
              className="img-fluid"
              alt="author"
            ></img>
            <div>
              {" "}
              <span>{author.name}</span>
              
              <span dangerouslySetInnerHTML={{__html: post.date}}></span>
            </div>
          </div>
          <div className="articleDetail__author-right">
            <a href="/#">
              <div>
                <img src={twitterIcon} alt="" />
              </div>
            </a>
            <a href="/##">
              <div>
                <img src={facebookIcon} alt="" />
              </div>
            </a>
          </div>
        </section>
      </section>
 
      <section className="articleDetail__content-wrapper container">
      
        
       { <div dangerouslySetInnerHTML={{__html: post.content}}></div> }
      
      
      
      </section>
<section className="articleDetail__wrapper container">
<ArticleDetailBottom author={author}></ArticleDetailBottom >
</section>

<section className='articleDetailBlogs articleDetail__wrapper container'>
  <ArticleDetailBlogs></ArticleDetailBlogs>

    
</section>
      
    </section>
  );
}
