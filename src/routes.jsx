import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PagesHome from './pages/home'
import PagesExclusives from './pages/exclusives'
import PagesPromotions from './pages/promotions'
import PagesFavorites from './pages/favorites'
import PagesProduct from './pages/product'
import { useDispatch } from 'react-redux'
import { loadFavorite } from './actions/products'
import PagesSearch from './pages/search'

const Routes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFavorite())
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PagesHome} />
                <Route path="/exclusives" component={PagesExclusives} />
                <Route path="/promotions" component={PagesPromotions} />
                <Route path="/favorites" component={PagesFavorites} />
                <Route path="/product/:id" component={PagesProduct} />
                <Route path="/search" component={PagesSearch} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
