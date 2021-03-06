import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Layout from 'containers/Layout.jsx';
import Main from 'containers/Main.jsx';
import Register from 'containers/Register.jsx';
import AdminUsers from 'containers/AdminUsers.jsx';
import AdminPhoto from 'containers/AdminPhoto.jsx';
import AdminJury from 'containers/AdminJury.jsx';
import Login from 'containers/Login.jsx';
import Jury from 'containers/Jury.jsx';
import Dashboard from 'containers/Dashboard.jsx';

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/jury" component={Jury}/>
            <Route path="/admin/dashboard" component={Dashboard}/>
            <Route path="/admin/users" component={AdminUsers}/>
            <Route path="/admin/photo" component={AdminPhoto}/>
            <Route path="/admin/jury" component={AdminJury}/>
        </Switch>
    </Layout>
);