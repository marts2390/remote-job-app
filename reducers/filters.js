
const filtersDefaultState = {
    text: '',
    filter: ''
}

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                state,
                text: action.text
            };
        case 'SET_FILTER':
            return {
                state,
                filter: action.filter
            };
        default:
            return state
    }

}

export default filtersReducer;