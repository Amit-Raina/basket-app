import listReducer from '../reducers/index';
import { compose, createStore} from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const store = createStore(listReducer , composeEnhancers());

export default store;