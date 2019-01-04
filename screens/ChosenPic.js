import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Button } from "react-native";

export default class ChosenPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    let current = <Text>Choose a pic</Text>;
    if (this.state.loaded !== false) {
      current = (
        <Image
          style={styles.backgroundImage}
          source={{
            uri: this.props.navigation.state.params.img
          }}
        />
      );
    }
    return <View style={styles.container}>{current}</View>;
    //return <Button onPress={() => console.log(this.props)} title="BTN"/>
  }
  componentDidUpdate() {
    if (this.state.loaded === false) {
      this.setState({
        loaded: true
      });
    }
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
