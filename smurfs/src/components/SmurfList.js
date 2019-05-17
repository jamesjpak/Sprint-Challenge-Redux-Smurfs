import React from 'react';

import { connect } from 'react-redux';
import Smurf from './Smurf';
import { getSmurf } from '../actions';

class SmurfList extends React.Component {
constructor() {
    super();
}

    getAllSmurfs = () => {
        this.props.getSmurf();
    }

    componentDidMount() {
        this.getAllSmurfs();
    }

    render() {
        return (
            <ul>
                {this.props.smurfs.map(smurf => {
                    return <Smurf smurf={smurf} />
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    {
        getSmurf
    }
)(SmurfList);