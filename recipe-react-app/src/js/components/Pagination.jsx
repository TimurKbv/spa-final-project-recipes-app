import React from "react";
import { useMemo } from "react";


function Pagination({totalPages, page, setPage}) {


    function incrementPage() {
        if (page < totalPages) {
            setPage(prev => prev + 1 )
        }
    }

    function decrementPage() {
        if (page > 1) {
            setPage(prev => prev - 1 )
        }
    }


  /* Erstelle li Elemente abhängig von Anzahl der Seiten */
  let displayPages = useMemo(() => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {

      pages.push(
        <li
          key={i}
        >
          <button
          onClick={() => setPage(i)}
          className={page === i 
          ? 
          ' bg-slate-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' 
          : 
          'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'}

          >{i}</button>
        </li>
      );
    }
    return pages;
  }, [totalPages, page]);

  return (
    <div className="mx-auto flex justify-center gap-3 py-3">
      <button 
      onClick={decrementPage}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Prev
      </button> 
      <ul className="flex gap-3">
        {/* Render li */}
        {displayPages}
        </ul>
      <button 
      onClick={incrementPage}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Next
      </button>
    </div>
  );
}

export default Pagination;
