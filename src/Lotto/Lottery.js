// component design
import React, { Component } from "react"
import Ball from "./Ball"


//should show 6 lotto balls
//Value 1-40 generated when button is clicked
class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40
  }
  constructor(props){
    super(props)
    this.state = {nums: Array.from({length: this.props.maxBalls})}
  }
  generate() {
    // pick random numbers
  }
  handleClick() {
    this.generate()
  }
  render() {
    return(
    <section className="Lottery">
      <h1>{this.props.title}</h1>
      <div>
        {this.state.nums.map(n => <Ball num = {n}/>)}
      </div>
      <button onClick={this.handleClick}>Generate</button>
    </section>
    )
  }

}

export default Lottery