const initialState = [
            'all',
            'active',
            'complete'
    ];

export default function(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_FILTERLIST_SUCCESS':
            return action.payload;
            
        default:
            return state;
    }
}