import React, { useState, useEffect } from 'react';
import Article from '../Article/Article'

export default function ArticleContainer(props) {
    var postList=props.data;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(props.loading);
        console.log('article container', props.data)
        postList=props.data;
        console.log('loading consol',loading)
    }, [props.data, props.loading])
    

    
  return (
    <div>ArticleContainer

<section>

<section className="articleList">

  <section className="articleList-container container">       

{
postList.map((x)=>(
<Article {...x}  key={x.id}   ></Article>

))


}

  </section>
</section>

</section>

    </div>
  )
}
