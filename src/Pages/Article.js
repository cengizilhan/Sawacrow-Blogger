import React from "react";
import Header from "../Layouts/Header/Header.js";
import Footer from "../Layouts/Footer/Footer";
import { NavLink, Outlet, useSearchParams, useParams } from "react-router-dom";


export default function Article() {
  let params = useParams();
  return (
    <section>
      <Header></Header>
      <h1>{params.articleid}</h1>
      <Footer></Footer>
    </section>
  );
}
