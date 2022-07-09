import React from 'react'
import './Article.scss'


export default function Article() {
  return (
    <section className='article__container'>
        <div className='article__container__image'>
            <img className='img-fluid' width="401" height="232" alt="bla bla"
             src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='article'></img>
        </div>
        <div className='article__container__text'>
            <span>Here are some things you should know regarding how we work </span>
            </div>
    </section>
  )
}
