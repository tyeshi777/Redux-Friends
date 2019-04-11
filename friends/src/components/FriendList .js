import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import { withRouter } from "react-router-dom";

class FriendList extends React.Component {
  componentDidMount() {
    this.props.getFriendS();
  }

  render() {
    return (
      <div>
        <h2>hello</h2>
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
  friends,
  fetchingFriends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getFriends }
  )(FriendList)
);
