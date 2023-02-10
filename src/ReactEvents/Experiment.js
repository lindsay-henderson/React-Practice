import React, {Component} from "react"
import "./wise.css"


class Experiment extends Component {

  static defaultProps = {
    messages: [
      "Hi there",
      "I like Peanut Butter",
      "Squirrels are sneaky"
    ]

  }

dispense = () => {
  let {messages} = this.props

  let rIndex = Math.floor(Math.random() * messages.length)
  console.log(messages[rIndex])
}

//arrow function at point of render  to bind
//intent is less clear
//passes only once, needs to be re-written each time
render () {
  return <div className="square" onMouseEnter={this.dispense}>🛼</div>
}
}

export default Experiment