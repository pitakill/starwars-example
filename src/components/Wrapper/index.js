// @flow
import * as React from 'react';
import App from '../App';
import {createStore, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class WrapperWithRedux extends React.Component<{}, void> {
    //fetchData = async (): Promise<fetch> => {
        //try {
            //const peopleRaw = await fetch('https://swapi.co/api/people');
            //const peopleDownloaded = await peopleRaw.json();
            //this.setState({people: peopleDownloaded.results});
            ////console.log(peopleDownloaded.results)
        //} catch (e) {
            //console.error(e);
        //}
    //}

    render(): React.Element<typeof App> {
        return (
            <App
                increment={this.props.actions.increment}
                decrement={this.props.actions.decrement}
                people={[]}
            />
        );
    }
}

const increment = () => ({type: INCREMENT});
const decrement = () => ({type: DECREMENT});

const mapStateToProps = (state) => ({counter: state.counter});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({increment, decrement}, dispatch)
});

const WrapperConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WrapperWithRedux);

const Wrapper = () => {
    return (
        <Provider store={store}>
            <WrapperConnected />
        </Provider>
    )
};

export default Wrapper;
