import { React, useEffect, useState } from 'react';
import { Main } from './design/style-mainAlbum';
import api from './services/api';

export default () => {
    const id = localStorage.getItem('id')

    const [music, setMusic] = useState([]);
    const [mu, setMu] = useState([]);
    

    useEffect(() => {
        const Load = async () => {
            await api.get('album/' + id.toLowerCase()).then((data) => {
                setMusic(data.data)
                setMu(data.data.tracks.data)
                console.log(data.data.tracks.data)
            });
        }

        Load();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
    localStorage.setItem('track',music.id)

    return (<Main>


        <div>
            <div><img src={music.cover_medium}></img></div>
            <h1>{music.title}</h1>
        </div>

        <div>
            { mu.map((elem) => (
            <div><p>Musica: {elem.title}</p><span>rank: {elem.rank}</span><a href={elem.link}>Musica Completa</a><audio controls='controls'><source src={elem.preview} type='audio/mp3'/></audio></div>
            ))}

            
        </div>
        <div></div>
    </Main>)
}