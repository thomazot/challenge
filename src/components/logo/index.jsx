import React from 'react'
import { TGLogo } from './styled'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <TGLogo>
            <Link title="Challenge Finch" to="/">
                <img alt="Challenge Finch" src="/images/code.png" />
            </Link>
        </TGLogo>
    )
}

export default Logo
