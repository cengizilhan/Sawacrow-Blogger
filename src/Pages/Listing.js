import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Pagination from '../Components/Listing/Pagination';

export default function Listing() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(49);
    const [lastPage, setLastPage] = useState(1);
    const [nPages, setNPages] = useState(1);
    
    const [recordsPerPage] = useState(10);
    

    
    useEffect(() => {
      
        axios.get('https://dummyblog.cengizilhan.com/wp-json/wp/v2/posts?page='+currentPage)
            .then(res => {
                    setData(res.data);
                    setLoading(false);
                    setLastPage(res.headers['x-wp-totalpages']);
                    //res.headers['x-wp-total'] total records
                    
                })
                .catch(() => {
                    console.error('There was an error while retrieving the data')
                })
    }, [])


    
  

  return (
    <div>Listing
  
  
  <Pagination nPages={currentPage} lastPage={lastPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />

    </div>
  )
}
