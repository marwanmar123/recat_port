import React from 'react';
import './skills.css';


const Skills = () => {
   
    return(
        <div className="flex flex-col lg:flex-row md:p-8 md:mt-48">
            <main>
                <h1 className="fontprnc text-5xl p-6">compétences et expériences</h1>
                <p className="w-2/3 md:text-2xl p-6">Le principal domaine de mon compétence est le développement d'applications web et mobiles.
                   avec HTML, CSS, JS (TypeScript), création de petites et moyennes applications Web avec php et mysql.
                   J'ai aussi une expérience dans wordpress</p>
            </main>
            
                <div>
                    <div className="slide">
                       <div className="cnt">
                           <div className="cnt-art">
                                <article className="art"><h1 className="liner md:font-bold md:text-3xl">HTML5</h1></article>
                                <article className="art"><h1 className="liner md:font-bold md:text-3xl">CSS3</h1></article>
                                <article className="art"><h1 className="liner md:font-bold md:text-3xl">JAVSCRIPT</h1></article>
                                <article className="art"><h1 className="liner md:font-bold md:text-3xl">SASS</h1></article>
                                <article className="art"><h1 className="liner md:font-bold md:text-3xl">REACTJS</h1></article>
                                <article className="art"><h1 className="liner md:font-bold md:text-3xl">GULP</h1></article>                                        
                                <article className="art"><h1 className="liner md:font-bold md:text-3xl">PHP</h1></article>
                                <article className="art"><h1 className="liner md:font-bold md:text-3xl">MYSQL</h1></article>
                                <article className="art"><h1 className="liner md:font-bold md:text-3xl">Bootstrap</h1></article>                                                                                         
                                <article className="art"><h1 className="text-blue-800 flash md:text-3xl">METHODE SCRUM</h1></article>                    
                           </div>
                        </div>
                    </div>
                </div>
        </div>
        
    )
   
}
export default Skills;