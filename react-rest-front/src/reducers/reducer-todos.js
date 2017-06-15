const initialState = [
    {text: 'learn angular', done: false, id: 1},
    {text: 'write the content for the next module', done: false, id: 2},
    {text: 'buy cheese', done: true, id: 3},
    {text: 'buy milk', done: true, id: 4}
];

export default function(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_TODOS_SUCCESS':
            return action.payload;
            
        default:
            return state;
    }
}