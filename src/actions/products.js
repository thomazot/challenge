import {
    PRODUCTS_REQUEST,
    PRODUCTS_FAILURE,
    PRODUCTS_FILTER_EXCLUSIVE,
    PRODUCTS_FILTER_PROMOTION,
    PRODUCTS_FAVORITES_ADD,
    PRODUCTS_FAVORITES_REMOVE,
    PRODUCTS_FAVORITES,
    PRODUCTS_SUCCESS,
    PRODUCTS_SEARCH,
    PRODUCTS_SEARCH_ID,
} from '.'
import { api } from '../helps'

export const loadProductRequest = (filter = 'ALL') => async (dispatch) => {
    dispatch(productRequest(true))

    try {
        const request = await api
            .get('/5d3b57023000005500a2a0a6')
            .then((data) => data.data.produtos)

        switch (filter) {
            case PRODUCTS_FILTER_EXCLUSIVE:
                dispatch(
                    productSuccess(
                        request.filter((product) => product.exclusivo)
                    )
                )
                break

            case PRODUCTS_FILTER_PROMOTION:
                dispatch(
                    productSuccess(
                        request.filter((product) => product.promocao)
                    )
                )
                break

            case 'ALL':
            default:
                dispatch(productSuccess(request))
        }
    } catch (e) {
        dispatch(productFailure(e))
    }

    dispatch(productRequest(false))
}

export const loadFavorite = () => (dispatch) => {
    const payload = JSON.parse(localStorage.getItem(PRODUCTS_FAVORITES)) || []
    dispatch({
        type: PRODUCTS_FAVORITES,
        payload,
    })
}

export const productSearchId = (id) => async (dispatch) => {
    const request = await api
        .get('/5d3b57023000005500a2a0a6')
        .then((data) =>
            data.data.produtos.filter((product) => product.id === id)
        )

    dispatch({
        type: PRODUCTS_SEARCH_ID,
        payload: request.length === 0 ? {} : request[0],
    })
}

export const productSearch = (word) => async (dispatch) => {
    word = word.toString().toLowerCase()
    const request = await api
        .get('/5d3b57023000005500a2a0a6')
        .then((data) =>
            data.data.produtos.filter(
                (product) =>
                    product.nome.toLowerCase().indexOf(word) !== -1 ||
                    product.decricaoCurta.toLowerCase().indexOf(word) !== -1 ||
                    product.descricaoLonga.toLowerCase().indexOf(word) !== -1
            )
        )

    dispatch({
        type: PRODUCTS_SEARCH,
        payload: request,
    })
}

export const addFavorite = (product) => ({
    type: PRODUCTS_FAVORITES_ADD,
    payload: product,
})

export const removeFavorite = (id) => ({
    type: PRODUCTS_FAVORITES_REMOVE,
    payload: id,
})

export const productRequest = (bool) => ({
    type: PRODUCTS_REQUEST,
    payload: bool,
})

export const productSuccess = (products) => ({
    type: PRODUCTS_SUCCESS,
    payload: products,
})

export const productFailure = (bool) => ({
    type: PRODUCTS_FAILURE,
    payload: bool,
})
