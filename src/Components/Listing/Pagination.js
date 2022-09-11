import React from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Pagination(props) {
    const nPages=props.nPages;
    
    const lastPage=props.lastPage;
    const currentPage=props.currentPage;
    const setCurrentPage=props.setCurrentPage;
    const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    
   
    }
    console.warn('nPages -1',nPages);
    
    
    let pageNumbers=[];
    
    for (let i = currentPage-3; i < currentPage+4; i++) {
        if (i>0 && i<=lastPage) {
            pageNumbers.push(i);
        }

        
         

    }
    console.log('pagenumbers -1', pageNumbers)
    
        
    
    const nextPage = () => {
             setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    
    useEffect(() => {
   
        urlParamUpdate(currentPage)
      }, [currentPage])

      const navigate = useNavigate();

    function urlParamUpdate(){
        var queryParams = new URLSearchParams(window.location.search);
queryParams.set("offset", parseInt(currentPage));
// 👇️ navigate  URL programmatically
  navigate({ search: queryParams.toString() });

    }

  return (
    <div>Pagination

<nav>
            <ul className='pagination justify-content-center'>

                {
                currentPage !== 1 && 
                <li className="page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        >
                        
                        Previous
                    </a>
                </li>
                    }
                
                
                
                {
                
                pageNumbers.map(pgNumber => (
                    
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            >
                            
                            {pgNumber}
                        </a>
                    </li>

                ))}
                {
                    currentPage != lastPage &&
                    <li className="page-item"> <a className="page-link"  onClick={nextPage} >  Next</a> </li>    
                }
                
                
            </ul>
        </nav>

    </div>
  )
}
