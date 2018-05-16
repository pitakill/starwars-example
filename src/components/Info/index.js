import * as React from 'react';
import type {InfoProps} from './types';

const Info = ({name, gender}: InfoProps): React.Element<React.Fragment> => {
    return (
        <React.Fragment>
            <h2>{name}</h2>
            <h3>{gender}</h3>
        </React.Fragment>
    )
};

export default Info;
