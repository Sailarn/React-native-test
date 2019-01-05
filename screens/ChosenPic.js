import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";

class ChosenPic extends React.Component {
  render() {
    let current = <Text>Choose a pic</Text>;
    if (this.props.loaded !== false) {
      current = (
        <Image
          style={styles.backgroundImage}
          source={{
            uri: this.props.pic
          }}
        />
      );
    }
    return <View style={styles.container}>{current}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "column"
  },
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null
  }
});
function mapStateToProps(state) {
  return {
    loaded: state.loaded.loaded,
    pic: state.loaded.pic
  };
}
export default connect(
  mapStateToProps,
  null
)(ChosenPic);
