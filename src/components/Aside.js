import React from "react";


function Aside (props){
      return(
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">{props.title}</h3>
            <ul className="space-y-2 font-medium">
                {props.children}
            </ul>
        </div>
        </aside>
      )
    }

  export default Aside
