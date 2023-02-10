import React, {Component} from "react"
import "./wise.css"

class ButtonList extends Component {
  static defaultProps = {
    colors: ["#0E6BA8", "#FB4D3D", "#03CEA4","#E40066"]
  }

  render() {
    return (
      <section>
      <div className="buttons">
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