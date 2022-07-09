import React from 'react'

import ArticleHero from "../Components/ArticleHero/ArticleHero";
import Article from "../Components/Article/Article";
import "./ArticleList.scss";
import Header from "../Layouts/Header/Header.js";
import Footer from "../Layouts/Footer/Footer";
import ArticleList from './ArticleList';
export default function Index() {
  return (
    <section>
    <Header></Header>
    <ArticleList></ArticleList>
    
    <Footer></Footer>
  </section>
  )
}
