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
    increment = () => {
        this.props.increment(12);
    }

    decrement = () => {
        this.props.decrement(22);
    }

  render(): React.Element<'div'> {
    return (
      <div className="App">
        <Header
            message={this.props.salutation}
            logo={logo}
            />
        <div className="App-intro">
        <button onClick={this.increment}>Sumar 12</button>
        <button onClick={this.decrement}>Restar 22</button>
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
