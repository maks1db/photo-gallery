import React from 'react';
import EntityEditor from 'Admin/EntityEditor.jsx';
import Inputs from 'Jury/Inputs.jsx';

export default () => (
    <EntityEditor 
        item="jury"
        itemKey="name"
        title="Жюри"
        children={Inputs}
        create={true}
    />
);