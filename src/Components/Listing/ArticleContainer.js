import React, { useState, useEffect } from 'react';
import Article from '../Article/Article'
import SkeletonArticle from '../Article/SkeletonArticle'
export default function ArticleContainer(props) {
    let postList=props.data;
    const [loading, setLoading] = useState(true);
    const fakeArr=[1,2,3,4,5,6,7,8,9,10];
    useEffect(() => {
        setLoading(props.loading);
        console.log('article container', props.data)
        postList=props.data;
        console.log('loading consol',loading)
    }, [props.data, props.loading])
    

    
  return (
    <div>

<section>

<section className="articleList">

  <section className="articleList-container ">       

{
  
  
  loading==true?fakeArr.map((y)=>(
    <SkeletonArticle key={y} />
  )):postList.map((x)=>(
  
        
    <Article {...x}  key={x.id}   ></Article>
    
    
    ))



}

  </section>
</section>

</section>

    </div>
  )
}
