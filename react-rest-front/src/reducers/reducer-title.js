const initialState = 'todos'

export default function(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_TITLE_SUCCESS':
            return action.payload;
        
        default:
            return state;
    }
}