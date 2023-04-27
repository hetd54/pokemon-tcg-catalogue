import React from "react";
import PokeList from "./PokeList";


function Aside (props){
      return(
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto shadow-lg bg-gray-50 dark:bg-gray-800">
            <ul className="font-medium bg-gray-700 text-white">
              <PokeList pokeList={props.pokeList}/>
            </ul>
        </div>
        </aside>
      )
    }

  export default Aside
