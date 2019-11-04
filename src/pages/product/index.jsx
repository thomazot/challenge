import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LayoutDefault from '../../layout/default'
import { productSearchId } from '../../actions/products'
import CardPage from '../../components/card/page'
import ModulesHeader from '../../modules/header'

const PagesProduct = ({ match }) => {
    const { id } = match.params
    const { product } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const load = () => {
        dispatch(productSearchId(parseInt(id)))
    }
    useEffect(load, [])

    return (
        <LayoutDefault>
            <ModulesHeader product={product} />
            <CardPage item={product} />
        </LayoutDefault>
    )
}

export default PagesProduct
