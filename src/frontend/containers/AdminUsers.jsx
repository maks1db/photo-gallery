import React from 'react';
import EntityEditor from 'Admin/EntityEditor.jsx';
import Inputs from 'Register/UserInfo.jsx';

export default () => (
    <EntityEditor 
        item="users"
        itemKey="name"
        title="Участники"
        itemSort={{create: -1}}
        children={Inputs}
    />
);