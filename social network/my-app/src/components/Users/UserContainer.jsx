import React from 'react';
import User from "./Users";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (Users);