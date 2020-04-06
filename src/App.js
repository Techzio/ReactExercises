import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    showp: false
  };
  toggleShowp = () => {
    this.setState(prevState => {
      return { showp: !prevState.showp };
    });
  };

  render() {
    return (
      <React.Fragment>
        <a href="#" onClick={this.toggleShowp}>
          Want to buy a new car?
        </a>
        {this.state.showp ? <p>Call +11 22 33 44 now!</p> : null}
      </React.Fragment>
    );
  }
}

export default App;
