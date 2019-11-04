import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LayoutDefault from '../../layout/default'
import { loadProductRequest } from '../../actions/products'
import Card from '../../components/card'
import { PRODUCTS_FILTER_EXCLUSIVE } from '../../actions'
import ModulesHeader from '../../modules/header'

const PagesExclusives = () => {
    const dispatch = useDispatch()
    const { result: card } = useSelector((state) => state.products)
    const load = () => {
        dispatch(loadProductRequest(PRODUCTS_FILTER_EXCLUSIVE))
    }
    useEffect(load, [])

    return (
        <LayoutDefault>
            <ModulesHeader
                title="Conheça todos os nossos produtos exclusivos"
                description="Listagem de produtos exclusivos - clique no produto desejado para saber mais"
            />
            <Card card={card} />
        </LayoutDefault>
    )
}

export default PagesExclusives
