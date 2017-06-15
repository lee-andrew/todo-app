import {
    getTodoApi, addTodoApi, setTodoApi, 
    getIdCountApi, setIdCountApi,
    getInputApi, setInputApi,
    getFilterListApi,
    getActiveFilterApi, setActiveFilterApi,
    getTitleApi,
    getCompletedCountApi, setCompletedCountApi, 
    deleteAllDone
} from '../api/todo-api';

/*
ACTIONS CREATORS FOR LOADING
*/
export const loadTodosSuccess = function(item) {
    return {
        type: "LOAD_TODOS_SUCCESS",
        payload: item
    }
}
export const loadIdCountSuccess = function(count) {
    return {
        type: "LOAD_IDCOUNT_SUCCESS",
        payload: count
    }
};

export const loadInputSuccess = function(input) {
    return {
        type: "LOAD_INPUT_SUCCESS",
        payload: input
    }
};

export const loadFilterListSuccess = function(filterList) {
    return {
        type: "LOAD_FILTERLIST_SUCCESS",
        payload: filterList
    }
};

export const loadActiveFilterSuccess = function(filter) {
    return {
        type: "LOAD_ACTIVEFILTER_SUCCESS",
        payload: filter
    }
};

export const loadTitleSuccess = function(title) {
    return {
        type: "LOAD_TITLE_SUCCESS",
        payload: title
    }
};


export const loadCompletedCountSuccess = function(count) {
    return {
        type: "LOAD_COMPLETEDCOUNT_SUCCESS",
        payload: count
    }
};

/*
TODO ACTION CREATORS (THUNK)
*/
export const getTodo = function() {
    return function(dispatch){
        return getTodoApi().then( function(res) {
            dispatch(loadTodosSuccess(res.data.todos)); // Load Todos
        }).catch( function(err) {
            throw(err);
        });
    }
};

export const addTodo = function(item, idCount) {
    return function(dispatch){
        // Add item to todos list and increment ID count by 1
        return Promise.all([addTodoApi(item, idCount), setIdCountApi(idCount+1)]).then( function(res) {
            dispatch(loadTodosSuccess(res[0].data.todos));  // Load Todos
            dispatch(loadIdCountSuccess(res[1].data.idCount));  // Load ID count
            dispatch(loadInputSuccess("")); // Reset input to empty string
        }).catch( function(err) {
            throw(err);
        });
    }
};

/*
ID COUNT ACTION CREATORS (THUNK)
*/
export const getIdCount = function() {
    return function(dispatch){
        return getIdCountApi().then( function(res) {
            dispatch(loadIdCountSuccess(res.data.idCount)); // Load ID count
        }).catch( function(err) {
            throw(err);
        });
    }
};

/*
INPUT ACTION CREATORS (THUNK)
*/
export const getInput = function() {
    return function(dispatch){
        return getInputApi().then( function(res) {
            dispatch(loadInputSuccess(res.data.input)); // Load input
        }).catch( function(err) {
            throw(err);
        });
    }
};

export const setInput = function(input) {
    let dataInput = input.target.value; // Get input from value property
    return function(dispatch){
        return setInputApi(dataInput).then( function(res) {
            dispatch(loadInputSuccess(dataInput));  // Load input
        }).catch( function(err) {
            throw(err);
        });
    }
};


/*
FILTER LIST ACTION CREATORS (THUNK)
*/
export const getFilterList = function() {
    return function(dispatch){
        return getFilterListApi().then( function(res) {
            dispatch(loadFilterListSuccess(res.data.filterList));   // Load filter list
        }).catch( function(err) {
            throw(err);
        });
    }
};


/*
ACTIVE FILTER ACTION CREATORS (THUNK)
*/
export const getActiveFilter = function() {
    return function(dispatch){
        return getActiveFilterApi().then( function(res) {
            dispatch(loadActiveFilterSuccess(res.data.activeFilter));   // Load active filter
        }).catch( function(err) {
            throw(err);
        });
    }
};

export const selectFilter = function(filter) {
    let dataFilter = filter.target.value;
    return function(dispatch){
        return setActiveFilterApi(dataFilter).then( function(res) {
            dispatch(loadActiveFilterSuccess(dataFilter));  // Load active filter
        }).catch( function(err) {
            throw(err);
        });
    }
};


/*
TITLE ACTION CREATORS (THUNK)
*/
export const getTitle = function() {
    return function(dispatch){
        return getTitleApi().then( function(res) {
            dispatch(loadTitleSuccess(res.data.title)); // Load Title
        }).catch( function(err) {
            throw(err);
        });
    }
};


/*
COMPLETED COUNT ACTION CREATORS (THUNK)
*/
export const getCompletedCount = function() {
    return function(dispatch){
        return getCompletedCountApi().then( function(res) {
            dispatch(loadCompletedCountSuccess(res.data.completedCount));   // Load Completed Count
        }).catch( function(err) {
            throw(err);
        });
    }
};


/*
CLEAR COMPLETE ACTION CREATORS (THUNK)
*/
export const clearComplete = function(todos) {
    return function(dispatch){
        // Delete completed todos and reset completed count to 0
        return Promise.all([deleteAllDone(),setCompletedCountApi(0)]).then( function(res) {
            dispatch(loadTodosSuccess(res[0].data.todos));  // Load Todos
            dispatch(loadCompletedCountSuccess(0)); // Reset Completed Count
        }).catch( function(err) {
            throw(err);
        });
    }
};

/*
HANDLE TOGGLE ACTION CREATORS (THUNK)
*/
export const handleToggle = function(todos, index, completedCount) {
    return function(dispatch){
        let done = (todos[index].done === true)? -1 : 1;    // Decrement by 1 if done, Increment by 1 if not done
        return Promise.all([setTodoApi(todos[index]), setCompletedCountApi(completedCount + done)]).then( function(res) {
            dispatch(loadTodosSuccess(res[0].data.todos));  // Load Todos
            dispatch(loadCompletedCountSuccess(res[1].data.completedCount));    // Load Completed Count
        }).catch( function(err) {
            throw(err);
        });
    }
};