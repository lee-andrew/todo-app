export default function(state=2, action) {
    switch(action.type) {
        case 'LOAD_COMPLETEDCOUNT_SUCCESS':
            return action.payload;
        
        default:
            return state;
    }
}