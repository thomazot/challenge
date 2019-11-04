import React from 'react'
import CardItem from './item'
import { TGList, TGCard } from './styled'

const Card = ({ card }) => {
    return (
        <TGList>
            {card.map((item) => (
                <CardItem key={item.id} item={item} />
            ))}
            <TGCard empty={true} />
            <TGCard empty={true} />
            <TGCard empty={true} />
            <TGCard empty={true} />
        </TGList>
    )
}

export default Card
