import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import NodesReducer from './nodes_reducer';

export default combineReducers({
    nodes: NodesReducer,
    form: formReducer
});