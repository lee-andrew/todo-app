export default function(state=5, action) {
    switch(action.type) {
        case 'LOAD_IDCOUNT_SUCCESS':
            return action.payload;
            
        default:
            return state;
    }
}