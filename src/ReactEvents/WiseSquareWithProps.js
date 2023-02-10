import React, {Component} from "react"


class WiseSquareWithProps extends Component {
  static defaultProps = {
    messages: [
      "Hi there",
      "I like Peanut Butter",
      "Squirrels are sneaky"
    ]

  }

dispense() {
  console.log ("this is... ", this)

  let {messages} = this.props

  let rIndex = Math.floor(Math.random() * messages.length)
  console.log(messages[rIndex])
}

//bind 'this' inline
//very explicit
//cons- if it's going to be passed multiple times, it will have to be bound multiple times
//calling bind each time creates a new function
render () {
  return <div className="square" onMouseEnter={this.dispense.bind(this)}>🤓</div>
}
}

export default WiseSquareWithProps