import React from "react";


function Aside (props){
      return(
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto shadow-lg bg-gray-50 dark:bg-gray-800">
        <h3 className="flex flex-row items-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
            <img className="w-16 h-16" src="data:image/png;base64,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"/>
            {props.title}</h3>
            <ul className="font-medium bg-gray-700 text-white">
                {props.children}
            </ul>
        </div>
        </aside>
      )
    }

  export default Aside
