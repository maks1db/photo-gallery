import React from 'react';

export default (props) => (
    <div className={`col-md-${props.number}`}>{props.children}</div>
);