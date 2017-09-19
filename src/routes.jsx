import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Layout from 'containers/Layout.jsx';
import Main from 'containers/Main.jsx';

export default () => (
    <Switch>
        <Layout>
            <Route path="/" component={Main} />
        </Layout>
    </Switch>
);