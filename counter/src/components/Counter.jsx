import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBatchClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncriment(this.props.counter)}
          className="btn btn-secondary btn-sm "
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
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
