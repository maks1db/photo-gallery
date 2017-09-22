import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Layout from 'containers/Layout.jsx';
import Main from 'containers/Main.jsx';
import Register from 'containers/Register.jsx';

export default () => (
    <Switch>
        <Layout>
            <Route exact path="/" component={Main} />
        </Layout>
        <Route path="/register" component={Register} />
    </Switch>
);