import React from 'react';

const Info = ({name, gender}) => {
    return (
        <React.Fragment>
            <h2>{name}</h2>
            <h3>{gender}</h3>
        </React.Fragment>
    )
};

export default Info;
