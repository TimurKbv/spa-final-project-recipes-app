import React from "react";
import { useMemo } from "react";



function Pagination({totalPages, page, setPageParams}) {


    function incrementPage() {
        if (page < totalPages) {
          setPageParams(page + 1 )
        }
    }

    function decrementPage() {
        if (page > 1) {
          setPageParams(page - 1 )
        }
    }


  /* Erstelle li Elemente abhängig von Anzahl der Seiten */
  let displayPages = useMemo(() => {
    let pages = [];
    let lastIndexStart = 3;
    let firstIndexEnd = totalPages - 2;
    
    for (let i = 1; i <= totalPages; i++) {
      // Finde Nachbar um aktuellen Page
      let isNeighborPage = (page - i === 1) || (i - page === 1 );
      // Wenn bis index 3 , wenn die Nachbarn, wenn index größer alse letzte 3
      if ((i <= lastIndexStart) || isNeighborPage || (i >= firstIndexEnd ) || (i === page)) {
        pages.push(
          <li
            key={i}
          >
            <button
            onClick={() => setPageParams(i)}
            className={page === i 
            ? 
            ' bg-slate-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' 
            : 
            'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'}
  
            >{i}</button>
          </li>
        );
      }

    }

    if (pages.length === 9) {
      pages.splice(3, 0, <li key={'124124314124'}>...</li>);
      pages.splice((pages.length - 3), 0 , <li key={'431413413413'} >...</li>);
    }

    return pages;
  }, [totalPages, page]);

  return (
    <div className="mx-auto flex justify-center gap-3 py-3">
      <button 
      onClick={decrementPage}
      disabled = {page === 1}

      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-7 border border-blue-500 hover:border-transparent rounded">
        Prev
      </button> 
      <ul className="flex gap-3">
        {/* Render li */}
        {displayPages}
        </ul>
      <button 
      onClick={incrementPage}
      disabled = {page === totalPages}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-7 border border-blue-500 hover:border-transparent rounded">
        Next
      </button>
    </div>
  );
}

export default Pagination;
