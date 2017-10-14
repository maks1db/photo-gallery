import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Layout from 'containers/Layout.jsx';
import Main from 'containers/Main.jsx';
import Register from 'containers/Register.jsx';
import AdminUsers from 'containers/AdminUsers.jsx';
import AdminPhoto from 'containers/AdminPhoto.jsx';
import AdminJury from 'containers/AdminJury.jsx';
import Login from 'containers/Login.jsx';

// const AdminRoutes = () => (
//     <Switch>
//         <Route path="/admin/users" component={AdminUsers}/>
//         <Route path="/admin/photo" component={AdminPhoto}/>
//         <Redirect to="/admin/users" />
//     </Switch>
// );

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin/users" component={AdminUsers}/>
            <Route path="/admin/photo" component={AdminPhoto}/>
            <Route path="/admin/jury" component={AdminJury}/>
        </Switch>
    </Layout>
);