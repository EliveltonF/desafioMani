import api from "./api";
import {useState,useEffect} from 'react';
export default () => {
   const id = localStorage.getItem('track')
   console.log(id)
   const [music, setMusic] = useState([]);

   useEffect(() => {
       const Load = async () => {
           await api.get('album/'+id + '/tracks').then((data) => {
              console.log(data.data)
               setMusic(data.data)
               console.log(music)
           });
       }

       Load();
       //eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   localStorage.setItem('lista',music)
   return (
      <></>
   )
}