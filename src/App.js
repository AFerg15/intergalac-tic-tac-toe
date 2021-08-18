import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import pixel from './img/pixel.png'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨"],
      activePlayer: "Player 1",
      winStatus: "",
      gameStatus: false,
      gameOver: "",
      click: true


    }
  }

handleGamePlay = (index) => {
  const {squares, activePlayer, gameStatus} = this.state
  if (this.state.gameStatus === true){
    this.setState({squares: squares, gameOver : "The game is over" })
    // {squares[index] = null}
} else if (activePlayer === "Player 1" && squares[index]==="👁‍🗨"){
    squares[index] = "👾"
    this.setState({activePlayer: "Player 2"})
    this.setState({squares: squares})
} else if (activePlayer === "Player 2" && squares[index]==="👁‍🗨"){
    squares[index] = "🛸"
    this.setState({activePlayer: "Player 1"})
    this.setState({squares: squares})
} 

  const winning =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [6,4,2],
    [0,4,8],
  ]
  for(let i=0; i<winning.length; i++){
    const [a, b, c] = winning[i];
    // console.log("here")
    // console.log(a)
    // console.log(b)
    // console.log(c)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === "👾"){
    this.setState({winStatus: "Player 1"})
    console.log("PLAYER ONE")
    console.log(a)
    console.log(b)
    console.log(c)
    this.setState({gameStatus: true})
    }else if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === "🛸"){
    this.setState({winStatus: "Player 2"})
    this.setState({gameStatus: true})
    }
  
  }
}

resetGame = () => {
  var squares = ["👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨"]
  var activePlayer = "Player 1"
  

  this.setState({squares: squares, activePlayer: activePlayer, gameStatus: false, winStatus: "", gameOver: ""})

}

playerTurn = (index) => {
 if(this.state.gameStatus === true){
 }else if(this.state.activePlayer === "Player 2" && this.state.squares[index] !== "👁‍🗨"){
    this.setState({activePlayer: "Player 1"})
    console.log("player1")
  }else if (this.state.activePlayer === "Player 1" && this.state.squares[index] !== "👁‍🗨"){
    this.setState({activePlayer: "Player 2"})
  }

}


  render(){
    return(
     
      <>
      
        <h1>Intergalac-Tic Tac Toe</h1>
        <br></br> 
        <h2>Intergalactic intermediary: {this.state.activePlayer}</h2>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id = "gameboard" >
        {this.state.squares.map((value, index) => {
          return (
          <Square
          handleGamePlay= {this.handleGamePlay}
          playerTurn= {this.playerTurn}
          value= {value}
          key= {index}
          index={index}   
          />
        )
        })}
          </div>
          <div className="playerStats">
          {/* <h2>Current Player:</h2>
          <p id="currentPlayer">{this.state.activePlayer}</p> */}
          <h2>The winner is:</h2>
          <p id="currentPlayer">{this.state.winStatus}</p>
          <h2>{this.state.gameOver}</h2>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="wrapper">
            <br></br>
            <br></br>

            <br></br>
          <button id="button" onClick = {this.resetGame}>Reset Game
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </button>
          </div>
      </>
      
    )
  }
}
export default App
