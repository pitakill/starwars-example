// @flow
import * as React from 'react';
import type {HeaderProps} from './types';

class Header extends React.Component<HeaderProps, void> {
    static defaultProps = {
        message: '¡hola mundo!'
    }

    componentDidMount(): void {
        console.log('HEADER: Se montó el componente')
    }
    render(): React.Element<'header'> {
        return (
            <header className="App-header">
              <img src={this.props.logo} className="App-logo" alt="logo" />
              <h1 className="App-title">{this.props.message}</h1>
            </header>
        )
    }
}

export default Header;
