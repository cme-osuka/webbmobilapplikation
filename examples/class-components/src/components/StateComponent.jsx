import React from "react";

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "black", size: 16 }
    
    this.updateColor = this.updateColor.bind(this);
  }

  updateColor() {
    if (this.state.color === "black") {
      this.setState({ color: "blue" });
      return;
    }
    this.setState({ color: "black" })
  }

  render() {
    const style = { color: this.state.color }
    return <p onClick={this.updateColor} style={style}>Click me!</p>
  }
}

export default StateComponent;