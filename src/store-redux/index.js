import {createStore} from 'redux';

function Music(state,action) {
    switch(action.type) {
        case 'ADD_MUSIC':
            return {};
        default:
            return state;
    }

};

const store = createStore({Music});

export default store;