import React from 'react';
import {Route, Redirect } from 'react-router';
import Layout from 'containers/Layout.jsx';
import Main from 'containers/Main.jsx';

export default (
    <Route component={Layout}>
        <Route path="/" component={Main} />
        <Route path="/test" component={Main} />
    </Route>
);