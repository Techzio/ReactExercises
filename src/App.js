import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    const maxcount = 8;
    if (this.state.count === maxcount) {
      this.setState({
        count: 0
      });
    } else {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    }
  };

  decrementCount = () => {
    if (this.state.count) {
      this.setState(prevState => {
        return {
          count: prevState.count - 1
        };
      });
    }
  };
  render() {
    return (
      <form>
        <h1>{this.state.count}</h1>
        <button
          type="button"
          name="incrementCount"
          onClick={this.incrementCount}
        >
          +
        </button>
        <button
          type="button"
          name="decrementCount"
          onClick={this.decrementCount}
        >
          -
        </button>
        <Lineitem count={this.state.count} />
      </form>
    );
  }
}

const Lineitem = ({ count }) => {
  const item = [];
  for (let i = 0; i < count; i++) {
    item.push(<li key={i}>This is line item {i + 1}</li>);
  }
  return <ul>{item}</ul>;
};

export default App;
