import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchData } from './saga';
import { ListItem, ExternalLink } from './../../styled';

class Saga extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const renderItems = this.props.saga.map((item, idx) => {
      return <ListItem key={idx}>{item.name}</ListItem>;
    });

    return (
      <ul>
        <ListItem>
          <ExternalLink href="https://github.com/PiotrBerebecki/redux-promise-thunk-saga/blob/master/src/views/saga/saga.js">
            See source code*
          </ExternalLink>
        </ListItem>
        {renderItems}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  saga: state.saga,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Saga);
