import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'
import LayoutDefault from '../../layout/default'
import { productSearch } from '../../actions/products'
import Card from '../../components/card'
import ModulesHeader from '../../modules/header'

const PagesSearch = ({ location }) => {
    const { p } = queryString.parse(location.search) || ''
    const dispatch = useDispatch()
    const { searchs: card } = useSelector((state) => state.products)
    const load = () => {
        dispatch(productSearch(p))
    }
    useEffect(load, [])

    return (
        <LayoutDefault>
            <ModulesHeader
                title={`Busca de produtos com "${p || 'Todos Produtos'}"`}
                description="Listagem de produtos buscados - clique no produto desejado para saber mais"
            />
            <Card card={card} />
        </LayoutDefault>
    )
}

export default PagesSearch
