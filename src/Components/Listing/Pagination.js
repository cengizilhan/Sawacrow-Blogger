import React from 'react'

export default function Pagination(props) {
    const nPages=props.nPages;
    
    const lastPage=props.lastPage;
    const currentPage=props.currentPage;
    const setCurrentPage=props.setCurrentPage;
    const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    
   
    }
    console.warn('nPages -1',nPages);
    
    const pageNumbers3 = [...Array(nPages + 3).keys()].filter(n => n !=0);
    let pageNumbers=[];
    for (let i = nPages-3; i < nPages+4; i++) {
        if (i>0 && i<=lastPage) {
            pageNumbers.push(i);
        }

        
         

    }
    console.log('pagenumbers -1', pageNumbers)
    
        
    
    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
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
                        href='#'>
                        
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
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>

                ))}
                {
                    currentPage != lastPage &&
                    <li className="page-item"> <a className="page-link"  onClick={nextPage} href='#'>  Next</a> </li>    
                }
                
                
            </ul>
        </nav>

    </div>
  )
}
