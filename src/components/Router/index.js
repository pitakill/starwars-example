// @flow
import * as React from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import App from '../App';

class Router extends React.Component<{}, void> {
    render(): React.Element<BrowserRouter> {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Link to='/'>Ruta /</Link>
                    <br />
                    <Link to='/hola'>Ruta Hola</Link>
                    <br />
                    <Link to='/adios'>Ruta Adios</Link>
                    <Switch>
                        <Route path="/:salutation" component={(props) => <App salutation={props.match.params.salutation} />}/>
                        <Route path="/" exact={true} component={App}/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default Router;
