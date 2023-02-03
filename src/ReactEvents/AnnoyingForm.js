import React, {Component} from "react";

class AnnoyingForm extends Component {
  handleKeyUp(evt) {
    if(evt.keyCode === 56) {
    alert("you pressed *** !")
    } else {
      alert("less cool")
    }
    console.log(evt)
  }

  render() {
    return (
      <div>
        <h3>Try Typing Here</h3>
        <textarea onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}

export default AnnoyingForm