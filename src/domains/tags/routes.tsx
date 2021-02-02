import { Route, Switch, useRouteMatch } from 'react-router-dom'

import List from './List'

function Routes(): JSX.Element {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={`${match.path}`} exact>
        <List />
      </Route>
    </Switch>
  )
}

export default Routes
