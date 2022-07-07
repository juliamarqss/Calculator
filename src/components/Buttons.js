import React from "react";

class Buttons extends React.Component {
  state = {
    display: 0,
    numbers: [],
    operators: [],
  }

  handleClick = () => {
    
  }

  render () {
    return (
      <button type="button" className="buttons" onClick={() => this.handleClick()}>{this.props.element}</button>
    );
  }
}

export default Buttons;
