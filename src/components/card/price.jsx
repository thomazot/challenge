import React from 'react'
import { TGCardPrice } from './styled'
import { currency } from '../../helps'

const CardPrice = ({ price }) => {
    return <TGCardPrice>{currency(price)}</TGCardPrice>
}

export default CardPrice
