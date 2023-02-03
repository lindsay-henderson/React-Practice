import { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: 'https://www.pcgs.com/UserImages/11588123o.jpg' } ,
      {side: 'tails', imgSrc: 'https://www.pcgs.com/UserImages/11588123r.jpg' }
    ]
  }
  constructor (props) {
    super(props)
    this.state = {
      currCoin: 'heads',
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  flipcoin() {
    const newCoin = choice(this.props.coins)
    this.setState(st => {
      let newState = {
        ...st,
        currCoin: 'newCoin',
        nFlips: st.nFlips+1,
        nHeads: st.nHeads + (newCoin.side === 'heads'? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails'? 1 : 0)
      }
      // newCoin.side === 'heads'? newState.nHeads += 1 : newState.nTails += 1
      return newState
    })
  }
  handleClick() {
    this.flipcoin()
  }
  render() {
    return(
      <div className="coin-container">
        <h2>Let's flip a coin</h2>
        <button onClick={this.handleClick}>Flip!</button>
        <Coin info= {this.state.currCoin}/>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads, and {this.state.nTails} tails.</p>
      </div>
    )
  }
}

export default CoinContainer