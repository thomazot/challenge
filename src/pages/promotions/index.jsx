import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LayoutDefault from '../../layout/default'
import { loadProductRequest } from '../../actions/products'
import Card from '../../components/card'
import { PRODUCTS_FILTER_PROMOTION } from '../../actions/index'
import ModulesHeader from '../../modules/header'

const PagesPromotions = () => {
    const dispatch = useDispatch()
    const { result: card } = useSelector((state) => state.products)
    const load = () => {
        dispatch(loadProductRequest(PRODUCTS_FILTER_PROMOTION))
    }
    useEffect(load, [])

    return (
        <LayoutDefault>
            <ModulesHeader
                title="Conheça nossas promoções"
                description="Listagem de produtos em promoção - clique no produto desejado para saber mais"
            />
            <Card card={card} />
        </LayoutDefault>
    )
}

export default PagesPromotions
