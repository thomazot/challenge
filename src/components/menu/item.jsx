import React from 'react'
import { withRouter } from 'react-router'
import { TGMenuItem, TGMenuLink } from './styled'

const MenuItem = ({ match, item }) => {
    const { path } = match

    return (
        <TGMenuItem>
            <TGMenuLink
                actived={(item.link === path).toString()}
                to={item.link}>
                <figure>
                    <img src={item.image} alt={item.label} />
                </figure>
                <span>{item.label}</span>
            </TGMenuLink>
        </TGMenuItem>
    )
}

export default withRouter(MenuItem)
