import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Auth from './domains/auth/routes'
import Home from './domains/home'
import Tags from './domains/tags/routes'
import Account from './domains/account/Account'

import { useUser } from './stores'

type Props = {
  children: React.ReactNode
}

function Router({ children }: Props): JSX.Element {
  const user = useUser()

  const renderRoutes = () => {
    if (user.loading) {
      return (
        <>
          <h1>Loading</h1>
        </>
      )
    } else if (user.user) {
      return (
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/accounts" exact>
            <Account />
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
