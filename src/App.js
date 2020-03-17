import React from 'react';
import Bus from './Bus';
import PropTypes from 'prop-types';
import {HashRouter, Route} from "react-router-dom";
import Movie from'./Movie';
import Test from './Test';
import Navi from './Navi';
import About from './About';
import Corona from "./Corona";
import GMap from "./GMap";

  function App() {

  return (
    <div>


      <HashRouter>
        <Navi />
        <Route path="/test" component={Test}>
        </Route>
        <Route path="/" exact={true} component={Bus}>
        </Route>
        <Route path="/movie" component={Movie}>
        </Route>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/corona" component={Corona}>
        </Route>

        <Route path="/map" component={GMap}/>

      </HashRouter>

    

    </div>
  );
}

export default App;
