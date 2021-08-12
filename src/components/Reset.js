import React, { Component } from 'react'

class Reset extends Component{

    handleClick = () => {
      this.props.resetGame(this.props.index)
    }

  render(){
    return(
      <>
        <div className="resetButton"
        onClick = {this.handleClick}>
        {this.props.value}
        </div>
      </>
    )
  }
}
export default Reset