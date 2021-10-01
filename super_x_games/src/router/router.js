import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CartPage from '../screens/cartPage'
import HomePage from '../screens/homePage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/cart'>
                    <CartPage />
                </Route>

                <Route>
                    <p>Página não encontrada</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router