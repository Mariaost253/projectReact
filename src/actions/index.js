export const ADD_COSTUMER ='ADD_COSTUMER';
export const REMOVE_COSTUMER ='REMOVE_COSTUMER';
export const REMOVE_ALL ='REMOVE_ALL';

export function addCharacterById(items={}){
    const action={
        type:ADD_COSTUMER,
        items
    }
    return action;
}

export function removeCharacterById(id){
    const action={
        type:REMOVE_COSTUMER,
        id
    }
    return action; 
}

export function removeAllList(){
    const action={
        type:REMOVE_ALL
    }
    return action; 
}