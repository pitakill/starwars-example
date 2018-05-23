// @flow
import * as React from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';
import Wrapper from '../Wrapper';

class Router extends React.Component<{}, void> {
    render(): React.Element<BrowserRouter> {
        return (
            <BrowserRouter>
                <Route path="/" exact={true} component={Wrapper}/>
            </BrowserRouter>
        )
    }
}

export default Router;
