import React, {Component} from "react"
// import './WiseSquare.css'

class WiseSquare extends Component {

dispense() {
  let messages = [
    "Hi there",
    "I like Peanut Butter",
    "Squirrels are sneaky"
  ]

  let rIndex = Math.floor(Math.random() * messages.length)
  console.log(messages[rIndex])
}

render () {
  return <div className="square" onMouseEnter={this.dispense}>🤓</div>
}
}

export default WiseSquare
