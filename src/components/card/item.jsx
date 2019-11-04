import React from 'react'
import CardFavorite from './favorite'
import {
    TGCard,
    TGFigure,
    TGCardMain,
    TGCardMainHead,
    TGCardTitle,
    TGCardDescription,
    TGTags,
    TGTag,
    TGCardContainer,
} from './styled'
import CardPrice from './price'
import CardHeader from './header'

const CardItem = ({ item }) => {
    return (
        <TGCard>
            <TGCardContainer>
                <CardHeader item={item} />
                <TGCardMain>
                    <TGCardMainHead>
                        <CardPrice price={item.valor} />
                        <CardFavorite item={item} />
                    </TGCardMainHead>
                    <TGCardTitle>{item.nome}</TGCardTitle>
                    <TGCardDescription>{item.decricaoCurta}</TGCardDescription>
                </TGCardMain>
            </TGCardContainer>
        </TGCard>
    )
}

export default CardItem
