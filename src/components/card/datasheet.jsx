import React from 'react'
import { TGCardTitle, TGDatasheet } from './styled'

const CardDatasheet = ({ datasheet }) => {
    return (
        <TGDatasheet>
            <TGCardTitle>Ficha Técnica</TGCardTitle>
            <ul>
                {datasheet.map((item) => (
                    <li key={item.titulo}>
                        {item.titulo}: {item.descricao}
                    </li>
                ))}
            </ul>
        </TGDatasheet>
    )
}

export default CardDatasheet
