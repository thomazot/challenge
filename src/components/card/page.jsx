import React from 'react'
import CardHeader from './header'
import CardDescription from './description'
import CardDatasheet from './datasheet'
import { TGCardContent } from './styled'

const CardPage = ({ item }) => {
    return (
        <>
            <TGCardContent>
                <CardHeader objectFit={'cover'} height={'360px'} item={item} />
                <CardDescription text={item.descricaoLonga} />
            </TGCardContent>
            <CardDatasheet datasheet={item.fichaTecnica || []} />
        </>
    )
}

export default CardPage
