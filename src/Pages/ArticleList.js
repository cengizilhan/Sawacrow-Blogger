import React from 'react';
import ArticleHero from '../Components/ArticleHero/ArticleHero';
import Article from '../Components/Article/Article';
import './ArticleList.scss';

export default function ArticleList() {
  return (
    <section className='articleList'>
        <ArticleHero></ArticleHero>
        <span className='articleList-header'>All Articles</span>
        <section className='articleList-container container'>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>

        </section>
    </section>
  )
}
