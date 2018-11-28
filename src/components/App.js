import React from "react";
import "../styles/components/app.scss";
import Header from "./Header";
import Intro from "./Intro";

export default class App extends React.Component {
  render() {
    return (
      <div className={"app"}>
        <Header />
        <Intro />
      </div>
    );
  }
}
