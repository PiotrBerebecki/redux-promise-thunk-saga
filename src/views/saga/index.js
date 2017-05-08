import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { fetchData } from './promise';
import { ListItem, ExternalLink } from './../../styled';

class Saga extends Component {
  componentDidMount() {
    // this.props.fetchData();
  }

  render() {
    // const renderItems = this.props.promise.map((item, idx) => {
    //   return <ListItem key={idx}>{item.name}</ListItem>;
    // });

    return (
      <ul>
        <ListItem>
          <ExternalLink href="#">
            TBC Async flow using redux-thunk*
          </ExternalLink>
        </ListItem>
        {/* {renderItems} */}
      </ul>
    );
  }
}

// const mapStateToProps = state => ({
//   promise: state.promise,
// });
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchData }, dispatch);
// };

export default connect(/*mapStateToProps, mapDispatchToProps*/)(Saga);
