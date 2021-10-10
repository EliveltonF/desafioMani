import { createStore } from 'redux';


const INITIAL_STATE = [
   {
       
   }
];
function reducer(state = INITIAL_STATE, action) {
    if(action.type == 'ADD_MUSIC')  {
        return [ action.music]
    }
    if(action.type == 'ADD_GENRE') {
        return [ action.genre]
    }
    return state
}
export const addMusic= (music) =>{
    return {
        type: 'ADD_MUSIC',
        music
    };
};
export const addGenre = (genre) => {
    return {
        type: 'ADD_GENRE',
        genre
    }
}
console.log(INITIAL_STATE)

export default createStore(reducer);