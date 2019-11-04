import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LayoutDefault from '../../layout/default'
import { loadProductRequest } from '../../actions/products'
import Card from '../../components/card'
import ModulesHeader from '../../modules/header'

const PagesHome = () => {
    const dispatch = useDispatch()
    const { result: card } = useSelector((state) => state.products)
    const load = () => {
        dispatch(loadProductRequest())
    }
    useEffect(load, [])

    return (
        <LayoutDefault>
            <ModulesHeader
                title="Conheça todos os nossos produtos"
                description="Listagem de produtos - clique no produto desejado para saber mais"
            />
            <Card card={card} />
        </LayoutDefault>
    )
}

export default PagesHome
