import Footer from "../components/Footer";
import React from "react";
import MegaMenu from "../components/MegaMenu";

const Home = () => {
    return (
        <div>
            <div className="p-4 flex flex-row items-center justify-center shadow-lg">
                <img className="w-40 sm:ml-24 hidden md:block" src="https://images.pokemontcg.io/" />
                <h1 className="sm:ml-24 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Track your Pokémon TCG collection with the
                <span className="text-red-600 dark:text-red-500">  PokéTCG Catalog.</span>
                </h1>
            </div>
            <div className=" flex items-center justify-center h-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900 to-red-600">
                <div className="w-screen text-xl bg-gray-50 m-12">
                    <div className="text-center text-white bg-gray-700"><h2>Available sets: </h2></div>
                    
                    <MegaMenu/>
                </div>
            </div>

            <Footer />
        </div>
    )
  };
  
  export default Home;