import React from 'react'
import { TGCardTitle, TGCardDescription, TGCardDescriptionLong } from './styled'

const CardDescription = ({ text }) => {
    return (
        <TGCardDescriptionLong>
            <TGCardTitle>Detalhes do Produto</TGCardTitle>
            <TGCardDescription>{text}</TGCardDescription>
        </TGCardDescriptionLong>
    )
}

export default CardDescription
