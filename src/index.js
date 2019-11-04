import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import rootReducer from './reducers'
import theme from './styled'
import { StyledGlobal } from './styled/global'

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(
    rootReducer,
    devTools
)

render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <StyledGlobal />
            <Routes />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
