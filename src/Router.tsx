import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Auth from './domains/auth/routes'

type Props = {
  children: React.ReactNode
}

function Router({ children }: Props): JSX.Element {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
