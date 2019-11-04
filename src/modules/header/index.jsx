import React from 'react'
import { TGHeader, TGHeaderTitle, TGHeaderDescription } from './styled'
import Search from '../../components/search'
import CardFavorite from '../../components/card/favorite'
import CardPrice from '../../components/card/price'

const ModulesHeader = ({ product, title, description }) => {
    const hasProduct = product ? Object.keys(product).length !== 0 : false
    return (
        <TGHeader>
            <div>
                <TGHeaderTitle>
                    {!hasProduct && `Empresa XPTO`}
                    {!hasProduct && <span> - {title}</span>}
                    {hasProduct && product.nome}
                    {hasProduct && <CardPrice price={product.valor} />}
                    {hasProduct && <CardFavorite item={product} />}
                </TGHeaderTitle>
                <TGHeaderDescription>
                    {!hasProduct ? description : product.decricaoCurta}
                </TGHeaderDescription>
            </div>
            <div>
                <Search />
            </div>
        </TGHeader>
    )
}

export default ModulesHeader
