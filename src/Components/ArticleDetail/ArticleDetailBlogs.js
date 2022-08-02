import React from 'react'
import ArticleDetailPost from './ArticleDetailPost'
import './ArticleDetailBlogs.scss'

export default function ArticleDetailBlogs() {
  return (
    <div className='ArticleDetailBlogs'><span className='ArticleDetailBlogs__title'>What to read next</span>
    <div className='ArticleDetailBlogs__posts'>
      <ArticleDetailPost></ArticleDetailPost>
      <ArticleDetailPost></ArticleDetailPost>
      <ArticleDetailPost></ArticleDetailPost>
      </div></div>
  )
}
