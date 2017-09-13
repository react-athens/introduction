import React from "react";

const Li = ({ isDone = false, onClick, children }) => (
  <li
    className="clickable"
    style={{ textDecoration: isDone ? "line-through" : "" }}
    onClick={onClick}
  >
    {children}
  </li>
)

const Counter = ({ value, onClick }) => (
  <span
    className="clickable"
    onClick={onClick}
  >
    Count clicks: {value}
  </span>
)

const INITIAL_STATE = {
  counter: 0,
  isDoneItems: [false, false, false]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }

  handleLiClick = (index) => (e) => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1,
      isDoneItems: prevState.isDoneItems.map((isDone, i) => index === i ? !isDone : isDone)
    }))
  }

  handleCounterClick = (e) => {
    this.setState(INITIAL_STATE)
  }

  render() {
    const resetButton = (
      <div>
        <button onClick={this.handleCounterClick}>Reset</button>
      </div>
    )

    const list = (
      <ul style={{ textAlign: "left", listStylePosition: "inside", padding: 0 }}>
        {
          this.state.isDoneItems.map(
            (isDone, index) => (
              <Li
                key={index}
                isDone={isDone}
                onClick={this.handleLiClick(index)}
              >
                Task - {index + 1}
              </Li>
            )
          )
        }
      </ul>
    )
    return (
      <div>
        {/* Always one root element */}
        {list}
        <Counter value={this.state.counter} />
        {resetButton}
      </div>
    )
  }
}

export default App