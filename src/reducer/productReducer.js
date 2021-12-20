export const initialState = {
    products: [],
    isError: false,
    isLoading: false,
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                isError: false,
                isLoading: false,
                products: action.payload,
            };
        case 'ON_ERROR':
            return {
                ...state,
                isError: action.payload,
                isLoading: false,
                products: [],
            };
        case 'ON_LOAD':
            return {
                ...state,
                isError: false,
                isLoading: action.payload,
                products: [],
            };
        default:
            return state;
    }
};
