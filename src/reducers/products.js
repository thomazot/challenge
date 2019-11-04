import {
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
    PRODUCTS_FAILURE,
    PRODUCTS_FAVORITES,
    PRODUCTS_FAVORITES_ADD,
    PRODUCTS_FAVORITES_REMOVE,
    PRODUCTS_SEARCH,
    PRODUCTS_SEARCH_ID,
} from '../actions'

const INITIAL_STATE = {
    request: false,
    failure: false,
    error: {},
    result: [],
    favorites: [],
    searchs: [],
    product: {},
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case PRODUCTS_REQUEST:
            return { ...state, request: payload, failure: false }

        case PRODUCTS_SUCCESS:
            return { ...state, result: payload }

        case PRODUCTS_FAILURE:
            return { ...state, error: payload, failure: true }

        case PRODUCTS_FAVORITES:
            return { ...state, favorites: payload }

        case PRODUCTS_FAVORITES_ADD:
            const favoritesAdd = [...state.favorites, payload]
            localStorage.setItem(
                PRODUCTS_FAVORITES,
                JSON.stringify(favoritesAdd)
            )

            return { ...state, favorites: favoritesAdd }

        case PRODUCTS_FAVORITES_REMOVE:
            const favoritesRemove = state.favorites.filter(
                (product) => product.id !== payload
            )
            localStorage.setItem(
                PRODUCTS_FAVORITES,
                JSON.stringify(favoritesRemove)
            )

            return { ...state, favorites: favoritesRemove }

        case PRODUCTS_SEARCH:
            return { ...state, searchs: payload }

        case PRODUCTS_SEARCH_ID:
            return { ...state, product: payload }

        default:
            return state
    }
}
