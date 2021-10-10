import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../Main/main';
import AppAlbum from '../app-album';

function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/play" component={AppAlbum}/>
         </Switch>
      </BrowserRouter>
   )
}

export default Routes;