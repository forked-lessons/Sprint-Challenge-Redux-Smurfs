import React from "react";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";
import { connect } from "react-redux";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div>
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};
export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
