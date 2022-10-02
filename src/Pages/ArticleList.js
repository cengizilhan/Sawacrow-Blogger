import {React, useEffect, useState }from "react";
import ArticleHero from "../Components/ArticleHero/ArticleHero";
import Article from "../Components/Article/Article";
import "./ArticleList.scss";
import axios from "axios";
import ArticleDetailBlogs from "../Components/ArticleDetail/ArticleDetailBlogs";


export default function ArticleList() {
  const [postList, setpostList] = useState([])

  useEffect(() => {
    axios.get('https://dummyblog.cengizilhan.com/wp-json/wp/v2/posts')
    .then(function (response) {
      // handle success
      
      console.warn(response);
      setpostList(response.data);
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
    <section>

      <section className="articleList">
        <ArticleHero></ArticleHero>
        <span className="articleList-header">All Articles</span>
        <section className="articleList-container d-flex container">       

        <ArticleDetailBlogs></ArticleDetailBlogs>

        </section>
      </section>
    
    </section>
  );
}
