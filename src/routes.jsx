import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Layout from 'containers/Layout.jsx';
import Main from 'containers/Main.jsx';
import Register from 'containers/Register.jsx';

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/register" component={Register}/>
        </Switch>
    </Layout>
);