import React, {Component} from 'react';




class About extends Component {
    render(){


        return(
            <div className="flex flex-col lg:flex-row md:p-8 mt-48">
                <div className="flex-1 pr-6">
                  <h1 className="text-5xl fontprnc p-6 text-center">À propos de moi</h1>
                  <p className="text-xl">Une personne passionné par la technologie, Ma
                      mission dans la vie est de crée des applications
                      web visuellement prestigieuses sans négliger les
                      différnetes aspect performance de l’application.<br />
                      professionnellement connecté avec l'industrie du 
                      développement Web et les technologies de l'information 
                      pendant un an.
                  </p>
                </div>
                <div className="flex-1 flex-col pr-6">
                    <h1 className="fontprnc text-5xl p-6 md:ml-16">Formation</h1>
                    <div className="flex flex-col md:pl-16 md:p-6">
                        <p className="text-xl pl-2"><span className="text-2xl pr-2 fontprnc">Diplome :</span>développeur web et mobile a l'école YOUCODE</p>                        
                        <p className="text-xl pl-2"><span className="text-2xl pr-2 fontprnc">Diplome :</span>baccalauréat</p>                                            
                   </div>
                </div>
            </div>
            
        )
    }
    
   
}
export default About;
