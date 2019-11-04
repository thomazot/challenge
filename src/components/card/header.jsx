import React from 'react'
import { TGFigure, TGTags, TGTag } from './styled'

const CardHeader = ({
    objectFit = 'cover',
    width = '100%',
    height = '187px',
    item,
}) => {
    return (
        <TGFigure height={height} width={width} objectFit={objectFit}>
            <a href={`/product/${item.id}`}>
                <img src={item.imagem} />
            </a>
            <TGTags>
                {item.exclusivo && (
                    <TGTag bg="linear-gradient(to right, #1DB6CE, #182AC9)">
                        Exclusivo
                    </TGTag>
                )}
                {item.promocao && (
                    <TGTag bg="linear-gradient(to right, #EF0E5A, #55118F)">
                        Promoção
                    </TGTag>
                )}
            </TGTags>
        </TGFigure>
    )
}

export default CardHeader
