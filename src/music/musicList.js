import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { addMusic } from '../store-redux/store';
import api from "../services/api";

export default ()=> {
    const dispatch = useDispatch()
    const [music, setMusic] = useState([]);

    useEffect(() => {
           const Load = async () => {
            await api.get('search?q=jesse_aguiar').then((data) => {
                setMusic(data.data)
              });
           }
        
        Load();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    dispatch(addMusic(music.data));
    return (
        <div></div>
    )
 

}