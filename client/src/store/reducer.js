import { combineReducers} from 'redux';
import quesreducer from './reducers/quesstatereducer';

const minReducer =  combineReducers({
    question : quesreducer
});
 export default minReducer;