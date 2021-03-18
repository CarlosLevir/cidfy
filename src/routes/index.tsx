import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movies from '../pages/Movies';

export default function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route path="/" component={Movies} exact />
    </Switch>
  );
}
