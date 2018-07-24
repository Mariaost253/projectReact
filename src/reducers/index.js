import{combineReducers} from 'redux';
import costumers from './costumers_reducer';
import heros from './test_reducer';



const rootReducer= combineReducers({
 costumers,
 heros
})


export default rootReducer;