import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Auth from './domains/auth/routes'
import Home from './domains/home'
import Tags from './domains/tags/routes'
import Account from './domains/account/Account'
import ItemRouter from './domains/items/routes'

import { useUser } from './stores'

type Props = {
  children: React.ReactNode
}

function Router({ children }: Props): JSX.Element {
  const loading = useUser((state) => state.loading)
  const user = useUser((state) => state.user)

  const renderRoutes = () => {
    if (loading) {
      return (
        <>
          <h1>Loading</h1>
        </>
      )
    } else if (user) {
      return (
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/accounts" exact>
            <Account />
          </Route>
          <Route path="/items">
            <ItemRouter />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      )
    }
  }

  return (
    <BrowserRouter>
      {children}
      {renderRoutes()}
    </BrowserRouter>
  )
}

export default Router
