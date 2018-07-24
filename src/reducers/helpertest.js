import costumer_json from '../data/costumers.json';

function createCharacter(id){
    let costumer=costumer_json.find(c=>c.id === id )
    return costumer;
}


export default createCharacter;