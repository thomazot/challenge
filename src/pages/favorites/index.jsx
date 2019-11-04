import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LayoutDefault from '../../layout/default'
import { loadProductRequest } from '../../actions/products'
import Card from '../../components/card'
import PagesFavoriteEmpty from './empty'
import ModulesHeader from '../../modules/header'

const PagesFavorites = (props) => {
    const dispatch = useDispatch()
    const { favorites: card } = useSelector((state) => state.products)
    const load = () => {
        dispatch(loadProductRequest())
    }
    useEffect(load, [])

    return (
        <LayoutDefault>
            <ModulesHeader
                title="Meus Favoritos"
                description="Listagem de produtos marcados como favoritos - clique no produto desejado para saber mais"
            />
            {card.length === 0 && <PagesFavoriteEmpty />}
            {card.length !== 0 && <Card card={card} />}
        </LayoutDefault>
    )
}

export default PagesFavorites
