import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Layout from 'containers/Layout.jsx';
import Main from 'containers/Main.jsx';
import Register from 'containers/Register.jsx';
import AdminUsers from 'containers/AdminUsers.jsx';
import AdminPhoto from 'containers/AdminPhoto.jsx';

const AdminRoutes = () => (
    <Switch>
        <Route path="/admin/users" component={AdminUsers}/>
        <Route path="/admin/photo" component={AdminPhoto}/>
        <Redirect to="/admin/users" />
    </Switch>
);

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/register" component={Register}/>
            <Route path="/admin" component={AdminRoutes}/>
        </Switch>
    </Layout>
);