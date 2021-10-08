import react from 'react';
import MusicList from '../music/musicList';
import AppAlbum from '../app-album';
import {Main} from '../design/style-Main';

export default () => {
    return (
        <Main>
            <AppAlbum/>
            <MusicList/>
            <MusicList/>
        </Main>
    )
}