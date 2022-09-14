import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Pagination from '../Components/Listing/Pagination';
import { useLocation } from "react-router-dom";
import ArticleContainer from '../Components/Listing/ArticleContainer';

export default function Listing() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [nPages, setNPages] = useState(1);
    
    const [recordsPerPage] = useState(10);

    
    
function getParam (){
  
  const urlParams = new URLSearchParams(window.location.search);
  setCurrentPage(parseInt(urlParams.get('offset'))) 
  
}
    
    useEffect(() => {
      getParam();
      
      setLoading(true);
        axios.get('https://dummyblog.cengizilhan.com/wp-json/wp/v2/posts?page='+currentPage)
            .then(res => {
                    setData(res.data);
                    setLastPage(res.headers['x-wp-totalpages']);
                    setLoading(false);
                    //res.headers['x-wp-total'] total records
                })
                .catch(() => {
                    console.error('There was an error while retrieving the data')
                })

         
                
    }, [currentPage])


    
  

  return (
    <div>Listing
      <ArticleContainer data={data} loading={loading} />
  

  
  <Pagination nPages={currentPage} lastPage={lastPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />

    </div>
  )
}
