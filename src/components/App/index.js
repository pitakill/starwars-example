// @flow
import * as React from 'react';
import { Component } from 'react';
import logo from './../../logo.svg';
import './styles.css';
import Header from './../Header';
import Info from './../Info';
import type {AppState} from './types';

class App extends Component<{}, AppState> {
    state = {
        people: []
    };

    fetchData = async (): Promise<fetch> => {
        try {
            const peopleRaw = await fetch('https://swapi.co/api/people');
            const peopleDownloaded = await peopleRaw.json();
            this.setState({people: peopleDownloaded.results});
            //console.log(peopleDownloaded.results)
        } catch (e) {
            console.error(e);
        }
    }
    componentDidMount(): void {
        this.fetchData();
    }
  render(): React.Element<'div'> {
    return (
      <div className="App">
        <Header
            logo={logo}
            />
        <div className="App-intro">
        {
            this.state.people.map(({height, name, gender}) => {
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