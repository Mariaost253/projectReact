import {ADD_COSTUMER,REMOVE_ALL } from '../actions';



function heros(state=[] ,action){
    switch(action.type){
        case ADD_COSTUMER:
        let heros=state.filter(item=>item.id===action.id);
        return heros;
        case REMOVE_ALL:
            heros=[];
            return heros;
        default:
        return state;
    
    }
}



export default heros;