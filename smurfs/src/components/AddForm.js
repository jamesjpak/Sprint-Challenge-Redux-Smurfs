import React from 'react';

import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddForm extends React.Component {
state = {
    smurf: {
        name: '',
        age: '',
        height: ''
    }
};

handleChanges = e => {
    
    this.setState({
        smurf: {
            ...this.state.smurf,
            [e.target.name]: e.target.value
        }
    })
}

addSmurf = e => {
    e.preventDefault();

    this.props.addSmurf(this.state.smurf);

    this.setState({
        smurf: {
            name: '',
            age: '',
            height: ''
        } 
    })

}

render() {
    return (
        <div>
            <h2> Add a Smurf! </h2>
            <form>
                <input
                placeholder='name'
                name='name'
                onChange={this.handleChanges}
                value={this.state.smurf.name}
                 />

                <input
                placeholder='age'
                name='age'
                onChange={this.handleChanges}
                value={this.state.smurf.age}
                 /> 

                <input 
                placeholder='height'
                name='height'
                onChange={this.handleChanges}
                value={this.state.smurf.height}
                /> 

                <button> Add yo smurf! </button>
            </form>
        </div>
    )
}
}

const mapStateToProps = ({ addingSmurfs }) => ({
    addingSmurfs
})

export default connect(
   mapStateToProps,
   { addSmurf }
)(AddForm);