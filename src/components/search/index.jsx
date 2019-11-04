import React, { useState } from 'react'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import icoLoupe from './img/loupe.png'
import { TGSearch } from './styled'

const Search = ({ location }) => {
    const { p } = queryString.parse(location.search)
    const [search, setSearch] = useState(p || '')

    const handle = (event) => {
        setSearch(event.target.value)
    }

    return (
        <TGSearch method="GET" action="/search">
            <input
                type="text"
                placeholder="Buscar"
                value={search}
                name="p"
                onChange={handle}
            />
            <button type="submit">
                <img src={icoLoupe} alt="buscar" />
            </button>
        </TGSearch>
    )
}

export default withRouter(Search)
