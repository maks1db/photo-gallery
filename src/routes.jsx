import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Layout from 'containers/Layout.jsx';
import Main from 'containers/Main.jsx';
import Register from 'containers/Register.jsx';

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Main} title="Фотовыставка"/>
            <Route path="/register" component={Register} title="Подача заявки"/>
        </Switch>
    </Layout>
);