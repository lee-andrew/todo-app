import {combineReducers} from 'redux';
import Title from './reducer-title';
import TodoReducer from './reducer-todos';
import ActiveFilterReducer from './reducer-activeFilter';
import SelectReducer from './reducer-selectOptions';
import IdCountReducer from './reducer-idCount';
import CompletedCountReducer from './reducer-completedCount';
import InputReducer from './reducer-input';

const allReducers = combineReducers({
    todos: TodoReducer,
    title: Title,
    activeFilter: ActiveFilterReducer,
    filterList: SelectReducer,
    idCount: IdCountReducer,
    completedCount: CompletedCountReducer,
    input: InputReducer
});

export default allReducers;