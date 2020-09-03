import React, {Component} from 'react';

class Contact extends Component {
    


   render(){

       return(
 <div>
     <p>hellow im an Contact page</p>
     <form className="w-64 m-auto">
          <div>
               <label htmlFor="name" className="block text-gray-200 text-sm font-bold mb-2">name</label>
               <input type="text" name="name" placeholder="your name..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
               <label htmlFor="lastname" className="block text-gray-200 text-sm font-bold mb-2">lastname</label>
               <input type="text" name="lastname" placeholder="your lastname..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
               <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">email</label>
               <input type="text" name="email" placeholder="your email..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
               <label htmlFor="message" className="block text-gray-200 text-sm font-bold mb-2">message</label>
               <textarea type="text" name="message" placeholder="your message..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
               </div>
                   <div>message has been sent</div>
                   <div>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                           send
                        </button>
                   </div>
               </form>
           </div> 
 )
   }
   
}

export default Contact; 