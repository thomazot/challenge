import React from 'react'
import ModulesNavigation from '../modules/navigation'
import { TGNav, TGMain, TGWrapper } from './styled'

const LayoutDefault = ({ children }) => {
    return (
        <TGWrapper>
            <TGNav>
                <ModulesNavigation />
            </TGNav>
            <TGMain>{children}</TGMain>
        </TGWrapper>
    )
}

export default LayoutDefault
