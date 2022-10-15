import { React, useEffect, useState } from "react";
import "./Article.scss";
import PlaceholderSvg from "../../Assets/Multimedia/placeholder.svg";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Link } from "react-router-dom";

export default function Article(props) {
  const [imgUrl, setimgUrl] = useState([]);

  //console.error('sawacrow')
  useEffect(() => {
    axios
      .get(
        `https://dummyblog.cengizilhan.com/wp-json/wp/v2/media/${props.featured_media}`
      )
      .then(function (response) {
        // handle success
        setimgUrl(response.data.media_details.sizes.full.source_url);
      });
  });

  return (
    <section className="article__container w-100">
     
         <Link to={"../article/" + props?.id}      className="hvr-underline-from-left w-100" >
        <link rel="preload" as="image" href={imgUrl} />

        <div className="article__container__image">
          <LazyLoadImage
            wrapperClassName=" mx-auto d-block"
            alt="article img"
            placeholderSrc={PlaceholderSvg}
            width="100%"
            height={232}
            className="img-fluid sawacrow"
            src={imgUrl}
            key={imgUrl}
          />
        </div>
        <div className="article__container__text">
          <span>{props.title?.rendered}</span>
        </div>
        </Link>
    </section>
  );
}
