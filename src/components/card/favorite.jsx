import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../actions/products'
import { TGRadio } from './styled'

const CardFavorite = ({ item }) => {
    const dispatch = useDispatch()
    const [favorite, setFavorite] = useState(false)
    const { favorites } = useSelector((state) => state.products)

    const load = () => {
        const checked = favorites.filter((product) => product.id === item.id)
        if (checked.length !== 0) setFavorite(true)
        else setFavorite(false)
    }

    useEffect(load, [favorites])

    const handleChange = (event) => {
        if (!favorite) dispatch(addFavorite(item))
        else dispatch(removeFavorite(item.id))

        setFavorite(!favorite)
    }

    return (
        <div>
            <TGRadio>
                <input
                    type="checkbox"
                    checked={favorite}
                    value={favorite}
                    onChange={handleChange}
                />
                <span></span>
                tornar favorito
            </TGRadio>
        </div>
    )
}

export default CardFavorite
