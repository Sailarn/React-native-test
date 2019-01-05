import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import GalleryContainer from "../screens/Gallery";
import ChosenPic from "../screens/ChosenPic";

const Gallery = createStackNavigator({
  Pics: GalleryContainer
});

Gallery.navigationOptions = {
  tabBarLabel: "Gallery",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const Chosen = createStackNavigator({
  Pic: ChosenPic
});

Chosen.navigationOptions = {
  tabBarLabel: "Chosen Pic",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

export default createBottomTabNavigator({
  Gallery,
  Chosen
});
