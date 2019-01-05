import React from "react";
import { connect } from "react-redux";
import { loaded } from "../store/actions/loading";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from "react-native";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullImgs: [],
      smallImgs: [],
      authors: []
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.imgsContainer}>{this.renderGallery()}</View>
      </ScrollView>
    );
  }
  renderGallery() {
    const { navigate } = this.props.navigation;
    return Object.keys(this.state.smallImgs).map((item, index) => {
      let small = this.state.smallImgs[item];
      let big = this.state.fullImgs[item];
      let name = this.state.authors[item];
      return (
        <TouchableHighlight
          key={index}
          onPress={() => this.bigPicture(navigate, big)}
        >
          <View style={styles.imgContainer}>
            <Text>By: {name}</Text>
            <Image
              key={index}
              style={styles.img}
              source={{
                uri: small
              }}
            />
          </View>
        </TouchableHighlight>
      );
    });
  }
  bigPicture = (nav, photo) => {
    this.props.loaded(photo);
    nav("Pic");
  };
  componentDidMount() {
    return fetch(
      "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
    )
      .then(response => response.json())
      .then(data => {
        for (let item of data) {
          this.setState({
            authors: this.state.authors.concat(item.user.name),
            fullImgs: this.state.fullImgs.concat(item.urls.full),
            smallImgs: this.state.smallImgs.concat(item.urls.thumb)
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  imgsContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  imgContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 300,
    height: 300,
    margin: 5
  }
});
function mapDispatchToProps(dispatch) {
  return {
    loaded: load => dispatch(loaded(load))
  };
}
export default connect(
  null,
  mapDispatchToProps
)(Gallery);
