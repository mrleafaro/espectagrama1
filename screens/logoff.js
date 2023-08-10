import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

export default class Logoff extends Component {
  componentDidMount() {
    firebase.auth().signOut();
    this.props.navigation.replace("Tela de Login");
    alert("Volte sempre!");
  }
  render() {
    return <View></View>;
  }
}
