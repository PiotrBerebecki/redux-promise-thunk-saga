import React from 'react';
import { connect } from 'react-redux';

function Promise({ promise }) {
  return (
    <div>
      {promise.map(p => <p key={p.name}>{p.name}</p>)}
    </div>
  );
}

const mapStateToProps = state => ({
  promise: state.promise,
});

export default connect(mapStateToProps, null)(Promise);
