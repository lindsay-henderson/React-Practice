import React, {Component} from "react"
import "./wise.css"

class ButtonList extends Component {
  static defaultProps = {
    colors: ["#0E6BA8", "#FB4D3D", "#03CEA4","#E40066"]
  }
  constructor(props) {
  super(props)
  this.state = {color: "yellow"}
  }

  changeColor(color) {

  }

  render() {
    return (
      <section>
      <div className="buttons" style={{backgroundColor: this.state.color}}>         
        {this.props.colors.map(c => {
          const colorObj = {backgroundColor: c}
          return <button style = {colorObj}>Click Here!</button>
        })}
      </div>
      </section>
    )
  }


}

export default ButtonList