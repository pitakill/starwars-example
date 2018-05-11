import React from 'react';

class Header extends React.Component {
    componentDidMount() {
        console.log('HEADER: Se montó el componente')
    }
    render() {
        return (
            <header className="App-header">
              <img src={this.props.logo} className="App-logo" alt="logo" />
              <h1 className="App-title">{this.props.mensaje}</h1>
            </header>
        )
    }
}

export default Header;
