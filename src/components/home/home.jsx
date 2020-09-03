import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import portimg from './mg.svg'
// import ToglSide from './../sidbar/togleside'


class Home extends Component {
    render(){
        return(
         <div>   
             <div className="flex flex-col md:flex-row justify-around">
                 <div className="flex flex-col justify-center">
                     <h1 className="fontprnc text-6xl tracking-widest">Hi,</h1>
                     <h1 className="fontprnc text-6xl tracking-widest">I'm marouan,</h1>
                     <h1 className="fontprnc text-6xl tracking-widest">web developer.</h1>
                     <p className="font font-bold text-xl">Front end developer/ wordpress/ Freelancer!</p>
                     <div className="my-4">
                         <NavLink className="bg-transparent hover:bg-gray-700 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded " to="/">contact me</NavLink>            
                     </div>
                 </div>
                 <div>
                     <img className="w-4/5 md:w-full shadow-2xl p-6" src={portimg} alt="portfolio"/>
                 </div>
             </div>
         </div>
    )
}
   
}
export default Home;