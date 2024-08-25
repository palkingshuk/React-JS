import {useState} from 'react'

function App() {
  // let cnt = 5
  
  const [cnt, setCount] = useState(0)

  function addValue(e)
  {
    // cnt += 1
    if(cnt < 20) setCount(cnt+1)
    else  alert("Counter can't go above 20")
    // console.log(cnt);
    
  }
  
  function decValue()
  {
    if(cnt > 0) setCount(cnt-1)
    else alert("Count can't be negative !!!")
    // console.log(cnt);
  }


  return (
    <>
      <h1>Welcome to Counter</h1>
      <h3>Counter: {cnt}</h3>
      <button id="increase" onClick={addValue}>Inc</button>
      <button id="decrease" onClick={decValue}>Dec</button>
    </>
  )
}

export default App
