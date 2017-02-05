import { combineReducers } from 'redux';
import RepositoriesReducer from './reducer_repositories';

const rootReducer = combineReducers({
    repositoriesReducer: RepositoriesReducer
});

export default rootReducer;