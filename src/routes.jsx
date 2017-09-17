import React from 'react';
import {Route, Redirect } from 'react-router';
import Index from 'containers/Index.jsx';

export default (
    <Route>
        <Route path="/" component={Index} />
    </Route>
);