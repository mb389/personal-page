import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import About from '../components/About';
import * as AboutActions from '../actions/about';


About.need = [
  AboutActions.fetchRepos
]

function mapStateToProps(state) {
  const {
    isFetching,
    lastUpdated,
    error,
    results
  } = state.repos || {
    isFetching: true,
    error:false,
    results: []
  };
  return {
    isFetching,
    lastUpdated,
    error,
    results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AboutActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(About);
