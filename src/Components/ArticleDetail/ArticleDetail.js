import React from "react";
import "./ArticleDetail.scss";
import heroImg from "../../Assets/Multimedia/article-hero.jpg";
import twitterIcon from "../../Assets/Multimedia/twitter.svg";
import facebookIcon from "../../Assets/Multimedia/facebook.svg";
import ArticleDetailBottom from "./ArticleDetailBottom";

export default function ArticleDetail() {
  return (
    <section className="articleDetail">
      <h1>
        A few words about this blog platform, Ghost, and how this site was made
      </h1>
      <span className="articleDetail__subheader">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </span>
      <img
        src={heroImg}
        className="articleDetail__heroimg"
        alt="herobanner"
      ></img>
      <section className="articleDetail__wrapper container">
        <div className="articleDetail__hr"></div>
        <section className="articleDetail__author-container">
          <div className="articleDetail__author-left">
            <img
              src="https://images.unsplash.com/photo-1657491784312-cf194c7d08fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="img-fluid"
              alt="author"
            ></img>
            <div>
              {" "}
              <span>Mika Matikainen</span>
              <span>Apr 15, 2020 · 4 min read</span>
            </div>
          </div>
          <div className="articleDetail__author-right">
            <a href="/#">
              <div>
                <img src={twitterIcon} alt="" />
              </div>
            </a>
            <a href="/##">
              <div>
                <img src={facebookIcon} alt="" />
              </div>
            </a>
          </div>
        </section>
      </section>
 
      <section className="articleDetail__content-wrapper container">
        <h2>asdasdasd</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          perferendis numquam iusto, libero mollitia aliquid et architecto
          molestias quasi nam non corporis, veritatis aspernatur obcaecati sint
          praesentium, magni molestiae eligendi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, dolor eveniet! Explicabo et sed rem iste ad ut ab natus
          cupiditate? Ipsum eligendi animi assumenda accusamus nobis architecto
          vitae saepe.
        </p>
        <img className="img-fluid" src="https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <ul>
          <li>list1</li>
          <li>list2</li>
        </ul>
      
      </section>
<section className="articleDetail__wrapper container">
<ArticleDetailBottom></ArticleDetailBottom>
</section>
      
    </section>
  );
}
