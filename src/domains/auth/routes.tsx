import { Route, Switch, useRouteMatch } from 'react-router-dom'

import Login from './Login'
import Register from './Register'

function Routes(): JSX.Element {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={`${match.path}/login`}>
        <Login />
      </Route>
      <Route path={`${match.path}/register`}>
        <Register />
      </Route>
    </Switch>
  )
}

export default Routes
