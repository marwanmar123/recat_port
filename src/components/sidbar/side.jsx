import React from 'react';
import { NavLink } from 'react-router-dom';


const Side = () =>{
    return(
        <div> 
            <nav className="flex fixed h-full flex-col md:p-4 bg-gray-800 md:w-24">
                <h1 className="font mb-40 text-gray-400 text-xs w-2 md:text-sm md:font-bold">KHADIRI MARWAN</h1>
                <div className="flex flex-col items-center">
                   <NavLink exact to="/"><i className="text-gray-200 hover:text-teal-400 p-4 text-sm md:text-lg fas fa-home"></i></NavLink>
                   <NavLink to="/about"><i className="text-gray-200 hover:text-teal-400 p-4 text-sm md:text-lg fas fa-user"></i></NavLink>
                   <NavLink to="/skills"><i className="text-gray-200 hover:text-teal-400 p-4 text-sm md:text-lg fas fa-address-card"></i></NavLink>
                   <NavLink to="/work"><i className="text-gray-200 hover:text-teal-400 p-4 text-sm md:text-lg fas fa-project-diagram"></i></NavLink>
                   <NavLink to="/contact"><i className="text-gray-200 hover:text-teal-400 p-4 text-sm md:text-lg fas fa-envelope"></i></NavLink>
                </div>
                <div className="social flex flex-col mt-64">
                     <a href="/facebook"><i className="text-gray-200 hover:text-teal-400 p-4 text-sm md:text-lg fab fa-facebook-f"></i></a>
                     <NavLink to="/twitter"><i className="text-gray-200 hover:text-teal-400 p-4 text-sm md:text-lg fab fa-twitter"></i></NavLink>
                     <NavLink to="/instagram"><i className="text-gray-200 hover:text-teal-400 p-4 text-sm md:text-lg fab fa-instagram"></i></NavLink>
                     <NavLink to="/linkedin"><i className="text-gray-200 hover:text-teal-400 p-4 text-sm md:text-lg fab fa-linkedin-in"></i></NavLink>
                 </div>
            </nav>
        </div>
    )
}
export default Side;