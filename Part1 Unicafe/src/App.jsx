import { useState } from "react"

const Statistics = ({good,bad,neutral}) => {

  const sum = good+neutral+bad
   
    if (sum>=1) {
      return(
        <>
              <h2>Here are the statistics:</h2>
              
              <StatisticLine text= "Good" value= {good} />

              <StatisticLine text= "Neutral" value= {neutral} />
              
              <StatisticLine text= "Bad" value={bad} />

              <StatisticLine text= "Sum" value={good+neutral+bad} />
          
              <StatisticLine text= "Average" value={(good-bad)/(good+bad+neutral) || 0} />
          
              <StatisticLine text= "Positive" value= {`${(good/(good+neutral+bad))*100 || 0}%`}/>
        </>
      )
    }
      else {
        return (
          <>
                <h2> No feedback given </h2>
          </>
        )

      }
    }    

const StatisticLine = (props) => {

  return(

    <table style={{width:'100%'}}>
      <tbody>
      <tr>
        <td style={{width:'50%'}}> {props.text} </td>
        <td style={{width:'50%'}}> {props.value} </td>
      </tr>
      </tbody>
    </table>
  )
}
  


const Button = (props) => {

return(
  <>
  <button onClick= {props.onClick}> {props.text} </button>
  </>
   
)
}


const App = () => {
  const [good, setGood]= useState(0)
  const [neutral, setNeutral]= useState(0)
  const [bad, setBad]= useState(0)

  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)

  return (

    <div>
      <h1>Please share your feedback with us:</h1>
      <Button onClick={increaseGood} text='Good'/>
      <Button onClick={increaseNeutral} text='Neutral'/>
      <Button onClick={increaseBad} text='Bad'/>

      <Statistics good={good} neutral={neutral} bad= {bad}/>
    </div>

    
  )
} 

export default App
