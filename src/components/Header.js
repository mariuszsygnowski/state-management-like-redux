import React from "react";
import "../styles/components/container.scss";
import "../styles/components/header.scss";
import {
  storeSetHandleChange,
  storeSetHandleChange1,
  storeState,
  subscribe
} from "./Store";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }
  //Like you see there is no state in this component,
  //you will get current state from component Store in componentWillMount()
  componentWillMount() {
    //Setting state by calling function storeState() who is in component Store
    this.setState(storeState());
    //If state in Store will change we always get an updates by calling function subscribe ()
    subscribe(() => {
      this.setState(storeState());
    });
  }

  handleChange(event) {
    storeSetHandleChange(event.target.value);
  }
  handleChange1(event) {
    storeSetHandleChange1(event.target.value);
  }

  render() {
    return (
      <div className="header ">
        <p>component header</p>
        <p>
          This is value from component Intro (this.state.intro.value):{" "}
          {this.state.intro.value}
        </p>
        <input
          value={this.state.header.inputValue}
          onChange={this.handleChange}
        />
        <input
          value={this.state.header.inputValue1}
          onChange={this.handleChange1}
        />
      </div>
    );
  }
}
