import {React, useEffect, useState }from "react";
import Header from "../Layouts/Header/Header.js";
import Footer from "../Layouts/Footer/Footer";
import ArticleDetail from "../Components/ArticleDetail/ArticleDetail.js";
import { NavLink, Outlet, useSearchParams, useParams } from "react-router-dom";
import axios from "axios";


export default function Article() {
  let params = useParams();
  //console.warn(params);
  const [post, setpost] = useState([])

  useEffect(() => {
    axios.get('https://dummyblog.cengizilhan.com/wp-json/wp/v2/posts/1001')
    .then(function (response) {
      // handle success
      
      setpost(response.data);
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
      <Header></Header>
      

      
     
      <ArticleDetail post={post} ></ArticleDetail>

      <Footer></Footer>
    </section>
  );
}
