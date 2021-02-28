import { Route, Switch, useRouteMatch } from 'react-router-dom'

import Items from './Items'
import Item from './Item'
import Create from './Create'

function Routes(): JSX.Element {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={`${match.path}/create`} exact>
        <Create />
      </Route>
      <Route path={`${match.path}/:id`} exact>
        <Item />
      </Route>
      <Route path={`${match.path}`} exact>
        <Items />
      </Route>
    </Switch>
  )
}

export default Routes
