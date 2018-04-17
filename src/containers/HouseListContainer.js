import React from 'react';
import { connect } from 'react-redux';
import { deleteHouse } from '../actions';
import { bindActionCreators } from 'redux';
import HouseList from '../components/HouseList';

export class HouseListContainer extends React.Component {
    render() {
        return (
            <HouseList
                houses={this.props.houses}
                deleteHouse={this.props.deleteHouse}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        houses: state.houses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteHouse: bindActionCreators(deleteHouse, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HouseListContainer)