import { Route, Switch, useRouteMatch } from 'react-router-dom'

import Items from './Items'
import Item from './Item'

function Routes(): JSX.Element {
  const match = useRouteMatch()

  console.log('match', match)

  return (
    <Switch>
      <Route path={`${match.path}/detail`} exact>
        <Item />
      </Route>
      <Route path={`${match.path}`} exact>
        <Items />
      </Route>
    </Switch>
  )
}

export default Routes
