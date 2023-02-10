import React, {Component} from "react"
// import './WiseSquare.css'

class WiseSquareWithProps extends Component {
  static defaultProps = {
    messages: [
      "Hi there",
      "I like Peanut Butter",
      "Squirrels are sneaky"
    ]

  }

dispense() {
  let messages =

  let rIndex = Math.floor(Math.random() * messages.length)
  console.log(messages[rIndex])
}

render () {
  return <div className="square" onMouseEnter={this.dispense}>🤓</div>
}
}

export default WiseSquareWithProps