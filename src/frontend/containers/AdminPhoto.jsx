import React from 'react';
import EntityEditor from 'Admin/EntityEditor.jsx';
import Inputs from 'Admin/Inputs.jsx';

export default () => (
    <EntityEditor 
        item="users"
        subItem="photo"
        itemKey="name"
        itemSort={{'_id': -1}}
        subItemKey="title"
        title="Фото участников"
        subItemBind="userId"
        children={Inputs}
    />
);