// @flow
import * as React from 'react';
import App from '../App';
import {bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import store from '../../store';
import * as actions from '../../actions';

import type {WrapperProps} from './types';

class WrapperWithRedux extends React.Component<WrapperProps, void> {
    render(): React.Element<typeof App> {
        return (
            <App
                increment={this.props.actions.increment}
                decrement={this.props.actions.decrement}
                fetch={this.props.actions.fetch}
                apiCall={this.props.apiCall}
            />
        );
    }
}

const mapStateToProps = (state) => ({...state});
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
