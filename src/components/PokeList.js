import React from 'react';
import { HashLink } from 'react-router-hash-link';

const PokeList = ({pokeList=[]}) => {
  return (
    <>
    { pokeList.map((data,index) => {
        if (data) {
            let lineItem = "flex items-center p-2 rounded-lg hover:text-red-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
            let textClass = "flex-1 ml-3";
          return (
            <li key={index} className={data.owned=== "Yes" ? "hidden" : "visible"}>
              <HashLink to={ `#${data.id}` } className={lineItem}>
              <span className={textClass}>{data.name}: {data.printLocation}/{data.setPrinted} </span>
              </HashLink>
              
            </li>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default PokeList