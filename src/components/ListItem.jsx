import React from 'react';

const ListItem = ({ list }) => {
    return (
        <div>{list?.title}</div>
    );
};

export default ListItem;