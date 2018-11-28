import React from "react";
import "../styles/components/intro.scss";
import "../styles/components/container.scss";
import { storeSet, storeState, subscribe } from "./Store";

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState(storeState());
    subscribe(() => {
      this.setState(storeState());
    });
  }

  render() {
    return (
      <div className="intro">
        <p>component intro</p>
        <p>This is value from Header component this.state.header.inputValue: {this.state.header.inputValue}</p>
        <p>
          This is value from Header component this.state.header.inputValue1:{" "}
          {this.state.header.inputValue1}
        </p>
        <p>
          This is value from Intro component intro.value (this.state.intro.value):{" "}
          {this.state.intro.value}
        </p>
      </div>
    );
  }
}