import React from "react";
import Header from "../Layouts/Header/Header.js";
import Footer from "../Layouts/Footer/Footer";
import ArticleDetail from "../Components/ArticleDetail/ArticleDetail.js";
import { NavLink, Outlet, useSearchParams, useParams } from "react-router-dom";


export default function Article() {
  let params = useParams();
  return (
    <section>
      <Header></Header>
     
      <ArticleDetail></ArticleDetail>

      <Footer></Footer>
    </section>
  );
}
