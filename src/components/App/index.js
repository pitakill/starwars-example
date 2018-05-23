// @flow
import * as React from 'react';
import { Component } from 'react';
import logo from './../../logo.svg';
import './styles.css';
import Header from './../Header';
import Info from './../Info';
import type {
    AppProps,
    AppState,
} from './types';

class App extends Component<AppProps, AppState> {
  render(): React.Element<'div'> {
    return (
      <div className="App">
        <Header
            message={this.props.salutation}
            logo={logo}
            />
        <div className="App-intro">
        <button onClick={this.props.increment}>Obtener información</button>
        {
            this.props.people.map(({height, name, gender}) => {
                const key = name + height;

                return (
                    <Info {...{key, name, gender}}/>
                )
            })
        }
        </div>
      </div>
    );
  }
}

export default App;
