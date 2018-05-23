// @flow
import * as React from 'react';
import App from '../App';
import {bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import store from '../../store';
import * as actions from '../../actions';

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

const mapStateToProps = (state) => ({counter: state.counter});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
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
