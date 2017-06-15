import axios from 'axios';

/*
TODO LIST API METHODS
*/
export const getTodoApi = function() {
    const url = "http://localhost:8080/api/todos";
 
    return axios.get(url).then( function(res) {
        return res;
    }).catch( function(err) {
        return err;
    });
};

export const addTodoApi = function(item, idCount) {
    const url = "http://localhost:8080/api/todos";
    let data = {text: item, done: false, id: idCount};
    
    return axios.post(url, data).then( function(res) {
        return getTodoApi().then( function(res1) {
            return res1;
        });            
    }).catch( function(err) {
        throw(err);
    });
};

export const setTodoApi = function(item) {
    const url = "http://localhost:8080/api/todos";
    let data = {text: item.text, done: !item.done, id: item.id};
    
    return axios.put(url, data).then( function(res) {
        return getTodoApi().then( function(res1) {
            return res1;
        });            
    }).catch( function(err) {
        throw(err);
    });
};

//Delete all done todos
export const deleteAllDone = function(count) {
    const url = "http://localhost:8080/api/todosAllDone";
    
    return axios.delete(url).then( function(res) {
        return getTodoApi().then( function(res1) {
            return res1;
        });            
    }).catch( function(err) {
        throw(err);
    });
};

/*
ID COUNT API METHODS
*/
export const getIdCountApi = function() {
    const url = "http://localhost:8080/api/idCount";
    
    return axios.get(url).then( function(res) {
        return res;
    }).catch( function(err) {
        return err;
    });
};

export const setIdCountApi = function(idCount) {
    const url = "http://localhost:8080/api/idCount";
    let data = {idCount: idCount};
    
    return axios.put(url, data).then( function(res) {
        return getIdCountApi().then( function(res1) {
            return res1;
        });            
    }).catch( function(err) {
        throw(err);
    });
};

/*
INPUT API METHODS
*/
export const getInputApi = function() {
    const url = "http://localhost:8080/api/input";

    return axios.get(url).then( function(res) {
        return res;
    }).catch( function(err) {
        return err;
    });
};

export const setInputApi = function(input) {
    const url = "http://localhost:8080/api/input";
    let data = {input: input};

    return axios.put(url, data).then( function(res) {
        return getInputApi().then( function(res1) {
            return res1;
        });            
    }).catch( function(err) {
        throw(err);
    });
};

/*
FILTER LIST API METHODS
*/
export const getFilterListApi = function() {
    const url = "http://localhost:8080/api/filterList";

    return axios.get(url).then( function(res) {
        return res;
    }).catch( function(err) {
        return err;
    });
};

/*
ACTIVE FILTER API METHODS
*/
export const getActiveFilterApi = function() {
    const url = "http://localhost:8080/api/activeFilter";

    return axios.get(url).then( function(res) {
        return res;
    }).catch( function(err) {
        return err;
    });
};

export const setActiveFilterApi = function(filter) {
    const url = "http://localhost:8080/api/activeFilter";
    let data = {activeFilter: filter};
    
    return axios.put(url, data).then( function(res) {
        return getActiveFilterApi().then( function(res1) {
            return res1;
        });            
    }).catch( function(err) {
        throw(err);
    });
};

/*
TITLE API METHODS
*/
export const getTitleApi = function() {
    const url = "http://localhost:8080/api/title";
    
    return axios.get(url).then( function(res) {
        return res;
    }).catch( function(err) {
        return err;
    });
};

/*
COMPLETED COUNT API METHODS
*/
export const getCompletedCountApi = function() {
    const url = "http://localhost:8080/api/completedCount";
    
    return axios.get(url).then( function(res) {
        return res;
    }).catch( function(err) {
        return err;
    });
};

export const setCompletedCountApi = function(count) {
    const url = "http://localhost:8080/api/completedCount";
    let data = {completedCount: count};
    
    return axios.put(url, data).then( function(res) {
        return getCompletedCountApi().then( function(res1) {
            return res1;
        });            
    }).catch( function(err) {
        throw(err);
    });
};