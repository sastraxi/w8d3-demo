import React from 'react';
import { connect } from 'react-redux';

const User = ({ user }) => (
  <div>
    { user &&
      <p>
        The current user is <b>{user.name}</b><br/>
        Their email is <u>{user.email}</u>
      </p>
    }
    { !user && 'There is no user in the store. Wait for it...' }
  </div>
);

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
)(User);
