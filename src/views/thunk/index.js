import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchData } from './thunk';
import { ListItem, ExternalLink } from './../../styled';

class Thunk extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const renderItems = this.props.thunk.map((item, idx) => {
      return <ListItem key={idx}>{item.email}</ListItem>;
    });

    return (
      <ul>
        <ListItem>
          <ExternalLink href="#">
            Async flow using redux-saga*
          </ExternalLink>
        </ListItem>
        {renderItems}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  thunk: state.thunk,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Thunk);
