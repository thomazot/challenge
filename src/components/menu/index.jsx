import * as React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './item'

const Menu = () => {
    const { menu } = useSelector((state) => state)
    return (
        <nav>
            {menu.result.map((item) => (
                <MenuItem item={item} key={item.label} />
            ))}
        </nav>
    )
}

export default Menu
