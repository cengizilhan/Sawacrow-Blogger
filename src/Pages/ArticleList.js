import {React, useEffect, useState }from "react";
import ArticleHero from "../Components/ArticleHero/ArticleHero";
import Article from "../Components/Article/Article";
import "./ArticleList.scss";
import axios from "axios";


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




  let article = {
    title: "What to read next",
    post: "lorem ipsum lorlaosdlao sdloq lwdoql doqwl",
    img:"https://dummyblog.cengizilhan.com/wp-content/uploads/2022/08/wp_dummy_content_generator_1003-300x300.jpg"
  }



  return (
    <section>

      <section className="articleList">
        <ArticleHero></ArticleHero>
        <span className="articleList-header">All Articles</span>
        <section className="articleList-container container">       

{
postList.map((x)=>(
  <Article {...x}></Article>
  
  ))


}

        </section>
      </section>
    
    </section>
  );
}
