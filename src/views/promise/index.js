import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchData } from './promise';

class Promise extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        {/* {this.props.promise.map(p => <p key={p.name}>{p.name}</p>)} */}
        Hello
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promise: state.promise,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Promise);
