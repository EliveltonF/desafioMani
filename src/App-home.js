import { React } from 'react';
import AppBar from './app-bar';
import { Lista } from './design/style-listaMusicas.js';
import { useSelector, useDispatch } from 'react-redux';
import { addGenre } from './store-redux/store';


function AppHome(props) {
  const state = useSelector(state => {
    return state[0]
  })
  console.log(state)

  return (
    <div>
      <AppBar title={props.title} />
      <div>
        <Lista>
          {state?.map((items) => (

            <div>
              <a href="/play"
                onClick={() => {

                  localStorage.setItem('id', items.album.id,
                  "name",items.album.title )
                }}
              ><img src={items.album.cover}></img></a>
              <div><p>{items.album.title}</p></div>
            </div>
          ))}
        </Lista>
      </div>
    </div>
  );







}

export default AppHome;

