import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncriment, onDicrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncriment={onIncriment}
            onDicrement={onDicrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
