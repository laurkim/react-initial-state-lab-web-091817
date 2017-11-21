import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const bombResponse = this.state.secondsLeft != 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!';
    return (
      <p>{bombResponse}</p>
    );
  }
};

export default Bomb;
