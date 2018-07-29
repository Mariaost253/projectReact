import costumer_json from '../data/costumers.json';

function createCharacter(objects){
    let costumer=costumer_json.add(objects)
    return costumer;
}


export default createCharacter;