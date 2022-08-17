import {React, useEffect, useState }from "react";
import "./ArticleDetail.scss";
import heroImg from "../../Assets/Multimedia/article-hero.jpg";
import twitterIcon from "../../Assets/Multimedia/twitter.svg";
import facebookIcon from "../../Assets/Multimedia/facebook.svg";
import ArticleDetailBottom from "./ArticleDetailBottom";
import ArticleDetailBlogs from "./ArticleDetailBlogs";

import axios from "axios";

export default function ArticleDetail(props) {
  const [imgUrl, setimgUrl] = useState([])
  const [post, setpost] = useState([])

// axios bu sayfada çalışmmıyor.
//çağrılan article js çalışmadığı zaman props'a data dolmuyor. dolayısıyla direk burası açılınca veri hiç gelmiyor aq normal.
  useEffect(() => {
    
console.warn("img g", props)


    axios.get(`https://dummyblog.cengizilhan.com/wp-json/wp/v2/media/${props.post.featured_media}`)
    .then(function (response) { // handle success
    console.log(response.data.media_details.sizes.full.source_url);
    setimgUrl(response.data.media_details.sizes.full.source_url);

    console.warn ("rapid1")
    console.warn(imgUrl)
    setpost({
      content: props.post.content.rendered,
     date: props.post.date,
     date_modified: props.post.modified,
     title:props.post.title.rendered,
     tags: props.post.tags,
     img:imgUrl
     /*
     başlık
     alt başlık
     resim
     author
     tags
     author açıklama */
   });
   console.warn ("rapid")
   console.warn(post)
    
    
  });
  

  }, [])

  //let { post } = props.post;
  console.log("test");
  console.log(props.post);
  /*
  const data = {
    content: props.post.content.rendered,
    date: props.post.date,
    date_modified: props.post.modified,
    title:props.post.title.rendered,
    tags: props.post.tags,
    img:imgUrl
   
    başlık
    alt başlık
    resim
    author
    tags
    author açıklama 
  } */
  //console.warn(props.post.content.rendered)



  return (
    <section className="articleDetail">
      <h2>article detail js___ </h2>
      { /*<div dangerouslySetInnerHTML={{__html: props.post.content.rendered}}></div> */}
      <h1>
        A few words about this blog platform, Ghost, and how this site was made
      </h1>
      <span className="articleDetail__subheader">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </span>
      <img
        src={heroImg}
        className="articleDetail__heroimg"
        alt="herobanner"
      ></img>
      <section className="articleDetail__wrapper container">
        <div className="articleDetail__hr"></div>
        <section className="articleDetail__author-container">
          <div className="articleDetail__author-left">
            <img
              src="https://images.unsplash.com/photo-1657491784312-cf194c7d08fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="img-fluid"
              alt="author"
            ></img>
            <div>
              {" "}
              <span>Mika Matikainen</span>
              <span>Apr 15, 2020 · 4 min read</span>
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
        
        
      
      
      
      </section>
<section className="articleDetail__wrapper container">
<ArticleDetailBottom></ArticleDetailBottom>
</section>

<section className='articleDetailBlogs articleDetail__wrapper container'>
  <ArticleDetailBlogs></ArticleDetailBlogs>

    
</section>
      
    </section>
  );
}
