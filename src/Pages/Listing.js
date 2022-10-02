import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Components/Listing/Pagination";
import ArticleContainer from "../Components/Listing/ArticleContainer";
import Header from "../Layouts/Header/Header.js";
import Footer from "../Layouts/Footer/Footer";

export default function Listing() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);


  function getParam() {
    const urlParams = new URLSearchParams(window.location.search);
    setCurrentPage(parseInt(urlParams.get("offset")));
  }

  useEffect(() => {
    getParam();
    console.warn("datar", data);
    setLoading(true);
    axios
      .get(
        "https://dummyblog.cengizilhan.com/wp-json/wp/v2/posts?page=" +
          currentPage
      )
      .then((res) => {
        setData(res.data);
        setLastPage(res.headers["x-wp-totalpages"]);
        setLoading(false);
        console.warn("datar2", data);
        //res.headers['x-wp-total'] total records
      })
      .catch(() => {
        console.error("There was an error while retrieving the data");
      });
    console.warn("datar2", data);
  }, [currentPage]);

  return (
    <div>
      <Header></Header>

      <ArticleContainer data={data} loading={loading} />

      <Pagination
        nPages={currentPage}
        lastPage={lastPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer> </Footer>
    </div>
  );
}
