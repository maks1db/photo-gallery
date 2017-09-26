import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndexScreen from 'Screens/IndexScreen.jsx';

function mapStateToProps(state) {
    return {
        dateEnd: state.app.dateEnd
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends Component {
    constructor() {
        super();
    }

    render() {
        const { dateEnd } = this.props;
        return (
            <div>
                <IndexScreen
                    dateEnd={dateEnd}
                />
            </div>
        );
    }
}