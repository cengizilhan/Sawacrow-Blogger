import React, { useState, useEffect } from 'react';
import Article from '../Article/Article'

export default function ArticleContainer(props) {
    var postList=props.data;
    useEffect(() => {
        console.log('article container', props.data)
        postList=props.data;
    }, [])
    

    
  return (
    <div>ArticleContainer

<section>

<section className="articleList">

  <section className="articleList-container container">       

{
postList.map((x)=>(
<Article {...x}></Article>

))


}

  </section>
</section>

</section>

    </div>
  )
}
