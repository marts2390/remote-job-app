import { createStore, combineReducers } from 'redux';
import filtersReducers from '../reducers/filters';
import Payload from '../api/api';

export default () => {
    const store = createStore(
        combineReducers({
            filters: filtersReducers,
            payload: {}
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}