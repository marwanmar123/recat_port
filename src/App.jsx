import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Side from './components/sidbar/side';
import './App.css'
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import Error from './error'



class App extends Component {
  render(){
    return (
      <BrowserRouter>  
        <Side />
        <div className="md:ml-24 ml-12 p-6 md:p-2 bg-gray-900 w-full h-full fixed text-white">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/work" component={Work}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
        </div>

        
       
      </BrowserRouter>
    );
  }
}

export default App;
