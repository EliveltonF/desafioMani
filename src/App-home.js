import React from 'react';

import AppBar from './app-bar';

import { Lista } from './design/style-listaMusicas.js'

function AppHome({ valores }) {


  const pict = valores[0]
  console.log(pict)
  return (
    <div>
      <AppBar title={'Generos Musicais'} />
      <div>
      
        </div>
    </div>
  );






}

export default AppHome;

