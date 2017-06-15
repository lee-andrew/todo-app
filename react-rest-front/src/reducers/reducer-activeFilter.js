export default function(state='all', action) {
    switch(action.type) {
        case 'LOAD_ACTIVEFILTER_SUCCESS':
            return action.payload;
        
        default:
            return state;
    }
}