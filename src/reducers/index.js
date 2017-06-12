import { combineReducers } from 'redux';
import SearchRepositoryReducer from './reducer_search_repository';

const rootReducer = combineReducers({
    searchRepository: SearchRepositoryReducer
});

export default rootReducer;