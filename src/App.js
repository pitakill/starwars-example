import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Info from './components/Info';

class App extends Component {
    state = {
        people: []
    };

    fetchData = async () => {
        try {
            const peopleRaw = await fetch('https://swapi.co/api/people');
            const peopleDownloaded = await peopleRaw.json();
            this.setState({people: peopleDownloaded.results});
            //console.log(peopleDownloaded.results)
        } catch (e) {
            console.error(e);
        }
    }
    componentDidMount() {
        this.fetchData();
    }
  render() {
    return (
      <div className="App">
        <Header
            mensaje="Hello World!"
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
