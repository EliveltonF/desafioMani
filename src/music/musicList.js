import React, { useEffect, useState } from 'react';
import App from '../App-home.js'
import api from "../services/api";
import AppAlbum from '../app-album.js';

export default function MusicList() {

    const [music, setMusic] = useState([]);

    useEffect(() => {
        api.get('genre').then((res) => {
            setMusic(res.data);
            
        });
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
   function valor() {
    for (const [key,value] of Object.entries(music)) {
        console.log(key)
        vale.splice(0,1,value)
      }
   }
   let vale = [];
   
   valor();

    return (
            <AppAlbum/>,
            <App valores={vale}></App>
    )
}