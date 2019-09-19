import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SignUp from './signup_page/signup_container';
import Login from './login_page/login_container';
import MainBody from './main_page/main_body';
import ItemCreateContainer from './item_form/item_create_container';
import { Route, Redirect, withRouter } from 'react-router-dom';
import '../stylesheets/body.css'
import '../stylesheets/footer1.css'
import '../stylesheets/header.css'
import '../stylesheets/footer2.css'
import '../stylesheets/reset.css'
import '../stylesheets/session.css'
import '../stylesheets/item-show/item-show.css'
import '../stylesheets/item-index/item-index.css'

const App = () => (
  <Switch>
    <AuthRoute exact path="/signup" component={SignUp} />
    <AuthRoute exact path="/login" component={Login} />
    <Route path="/" component={MainBody} />
    <ProtectedRoute exact path="/items/new" component={ItemCreateContainer} />
  </Switch>
);

export default App;