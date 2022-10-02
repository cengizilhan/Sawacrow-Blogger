import React, { useState, useEffect } from 'react';
import axios from "axios";
import './ArticleDetailBlogs.scss'
import Article from '../Article/Article'
import SkeletonArticle from '../Article/SkeletonArticle'

export default function ArticleDetailBlogs() {
  const [data, setData] = useState([]);
  const [postList, setpostList] = useState([])
  const [loading, setLoading] = useState(true);
  const fakeArr=[1,2,3,4];
  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyblog.cengizilhan.com/wp-json/wp/v2/posts')
    .then(function (response) {
      // handle success
      
      console.warn(response);
      setpostList(response.data.slice(0,4));
      setLoading(false);
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
    <div className='ArticleDetailBlogs'><span className='ArticleDetailBlogs__title'>What to read next</span>
    <div className='ArticleDetailBlogs__posts container'>
    {
  
  
  loading==true?fakeArr.map((y)=>(
    <SkeletonArticle key={y} />
  )):postList.map((x)=>(
  
        
    <Article {...x}  key={x.id}   ></Article>
    
    
    ))



}
    
      </div></div>
  )
}
