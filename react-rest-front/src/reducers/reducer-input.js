export default function(state='', action) {
    switch(action.type) {
        case 'LOAD_INPUT_SUCCESS':
            if (!action.payload) {
                return "";
            }
            return action.payload;
            
        default:
            return state;
    }
}