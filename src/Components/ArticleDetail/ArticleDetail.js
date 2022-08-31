import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticleDetail.scss";
//import heroImg from "../../Assets/Multimedia/article-hero.jpg"; 
import twitterIcon from "../../Assets/Multimedia/twitter.svg";
import facebookIcon from "../../Assets/Multimedia/facebook.svg";
import ArticleDetailBottom from "./ArticleDetailBottom";
import ArticleDetailBlogs from "./ArticleDetailBlogs";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderSvg from '../../Assets/Multimedia/placeholder.svg';


import axios from "axios";

export default function ArticleDetail(props) {
  const articleid = useParams();

  const [imgUrl, setimgUrl] = useState([]);
  const [post, setpost] = useState([]);
  const [author, setauthor] = useState([]);


  useEffect(() => {
    axios
      .get(
        "https://dummyblog.cengizilhan.com/wp-json/wp/v2/posts/" +
          articleid.articleid
      )
      .then(function (response) {
        // handle success
        //console.log(response);
        //  setpost(response.data);
        setpost({
          content: response.data.content.rendered,
          date: new Date(response.data.date).toLocaleDateString("en-US"),
          date_modified: new Date(response.data.modified).toLocaleDateString(
            "en-US"
          ),
          title: response.data.title.rendered,
          subtitle: response.data.excerpt.rendered,
          tags: response.data.tags,
          img: imgUrl,
          userId: response.data.author,
          tags: response.data.tags,
          meta: {
            title: response.data.yoast_head_json.title,
            description: response.data.yoast_head_json.og_description,
            canonical: response.data.yoast_head_json.canonical,
          },
          /*
     alt başlık
     
     author
     tags
     author açıklama */
        });
        // Fetch img url from another endpoint
        axios.get(
            `https://dummyblog.cengizilhan.com/wp-json/wp/v2/media/${response.data.featured_media}`
          )
          .then(function (response) {
            // handle success
            setimgUrl({imgurl:response.data.media_details.sizes.full.source_url});
          });

        axios
          .get(
            `https://dummyblog.cengizilhan.com/wp-json/wp/v2/users/${response.data.author}`
          )
          .then(function (response) {
            // handle success
            //setauthor(response);
            //console.warn("author", response);
            setauthor({
              name: response.data.slug,
              img: response.data.avatar_urls[96],
              description: response.data.description,
            });
          });
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <section className="articleDetail">
    
    {
    //console.log("TİTLE", post.meta?.title)
    }
      <Helmet>
        <title>{post.meta?.title}</title>
        <meta name="description" content={post.meta?.description} />
        <link rel="canonical" href={post.meta?.canonical} />
        
        {
          imgUrl.imgurl && <link rel="preload" href={imgUrl.imgurl} as="image" />
        }
      </Helmet>
      <h1 className="placeholder-glow">
        <section className={post.title?'d-none':false}>
        <span className="placeholder w-100"></span>
        <span className="placeholder w-100"></span>
        </section>
        
        <span dangerouslySetInnerHTML={{ __html: post.title }}></span>
      </h1>
      <span className="articleDetail__subheader"></span>
   
    
      <LazyLoadImage  wrapperClassName="mx-auto d-block"
              alt="herobanner" 
              placeholderSrc={PlaceholderSvg}
              
              width = {400}
              height = {400}
              
              className="articleDetail__heroimg mx-auto"
              src={ imgUrl.imgurl}
              
           
              
        />
        

      <section className="articleDetail__wrapper container">
        <div className="articleDetail__hr"></div>
        <section className="articleDetail__author-container">
          <div className="articleDetail__author-left">
          <LazyLoadImage  wrapperClassName="mx-auto d-block"
              alt="author" 
              placeholderSrc={PlaceholderSvg}
              
              width = {57}
              height = {57}
              
              className="img-fluid"
              src={author.img}
              
           
              
        />
            
            
            <div>
              {" "}
              <span>{author.name}</span>
              <span dangerouslySetInnerHTML={{ __html: post.date }}></span>
            </div>
          </div>
          <div className="articleDetail__author-right">
            <a target="_blank" href={'https://twitter.com/intent/tweet?url='+window.location.href}>
              <div>
                <img src={twitterIcon} alt="" />
              </div>
            </a>
            <a target="_blank" href={'http://www.facebook.com/share.php?u='+window.location.href}>
              <div>
                <img src={facebookIcon} alt="" />
              </div>
            </a>
          </div>
        </section>
      </section>

      <section className="articleDetail__content-wrapper container  placeholder-glow">
        <section className={ post.content?'d-none':false } >
        <span className="placeholder w-75"></span>
        <span className="placeholder w-100"></span>
        <span className="placeholder w-100"></span>
        <span className="placeholder w-100"></span>
        <span className="placeholder w-100"></span>
        <span className="placeholder w-100"></span>
        <span className="placeholder w-100"></span>
        <span className="placeholder w-75"></span>
        <span className="placeholder w-50"></span>
        </section>
        {<div dangerouslySetInnerHTML={{ __html: post.content?post.content:''}}></div>}
        
      </section>
      <section className="articleDetail__wrapper container">
        <ArticleDetailBottom author={author}></ArticleDetailBottom>
      </section>

      <section className="articleDetailBlogs articleDetail__wrapper container">
        <ArticleDetailBlogs></ArticleDetailBlogs>
      </section>
    </section>
  );
}
