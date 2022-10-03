import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
class Counter extends Component {
  render() {
    const { onIncriment, counter, onDicrement, onDelete } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBatchClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncriment(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onDicrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBatchClasses() {
    let classes = "m-2 badge bg-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
