import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inv, setInv] = useState({
    currentScore: 76,
    currentWicket: 2,
    currentOver: 50,
  })
  const handleChange = (value, item) => {
    if (item == "score") {
      setInv({
        currentScore: value + inv.currentScore,
        currentWicket: inv.currentWicket,
        currentOver: inv.currentOver,
      })
      if(inv.currentScore==0){
        setInv({
          currentScore: 1 + inv.currentScore,
          currentWicket: inv.currentWicket,
          currentOver: inv.currentOver,
        })
      }
    }
    else if (item == "wicket") {
      setInv({
        currentScore: inv.currentScore,
        currentWicket: value + inv.currentWicket,
        currentOver: inv.currentOver,
      })
      if(inv.currentWicket==0){
        setInv({
          currentScore:  inv.currentScore,
          currentWicket: 1+inv.currentWicket,
          currentOver: inv.currentOver,
        })
      }
    }
    else if (item == "ball") {
      setInv({
        currentScore: inv.currentScore,
        currentWicket: inv.currentWicket,
        currentOver: value + inv.currentOver,
      })
      if(inv.currentOver==0){
        setInv({
          currentScore: inv.currentScore,
          currentWicket: inv.currentWicket,
          currentOver: 1+inv.currentOver,
        })
      }
    }
  }
  return (
    <>

      <div className="App">
        <h3 className='India'>India:</h3>
        <div className="banner">
          <div className='heading'>
            Score:{""}
            <h1 className="scoreCount">
              {
                inv.currentScore


              }
            </h1>
          </div>
          <div className='heading'>
            Wicket:{""}
            <h1 className="wicketCount">
              {
                inv.currentWicket
              }
            </h1>
          </div>

          <div className='heading'>


            Over:{""}

            <h1 className="overCount">
              {
                `${Math.floor(inv.currentOver / 6)}.${inv.currentOver - (Math.floor(inv.currentOver / 6)) * 6}`


            

                // currentOver
                // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
                // if 1 more ball is thrown then over is now 5.0
                // you have to write logic to form this string from current ball number.
              }
            </h1>
          </div>
        </div>

        <div className="addScore">
          Add Score
          {/* these buttons should add the respective amount in the score */}
          <button className="addScore1" onClick={() => { handleChange(1, "score") }}>Add 1</button>
          <button className="addScore4" onClick={() => { handleChange(4, "score") }}>Add 4</button>
          <button className="addScore6" onClick={() => { handleChange(6, "score") }}>Add 6</button>
        </div >

        <div className="addWicket">
          Add Wicket
          {/* Increase the count of wicket */}
          <button className='addwicket1' onClick={() => { handleChange(1, "wicket") }}>Add 1 wicket</button>
        </div>

        <div className="addBall">
          Add ball
          {/* Increase the total number of balls thrown here. */}
          <button className="addball1"onClick={() => { handleChange(1, "ball") }}>Add 1</button>
        </div>
                <h1 className='status'>
              {
                `${(inv.currentScore>100)?"India won":""}`
              }

                </h1>


        {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      </div>
    </>
  );
}

export default App;
