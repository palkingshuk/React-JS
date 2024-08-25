import {useState} from 'react'
import Button from './Components/Button'

function App() {

  const [color, setcolor] = useState("black")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button colour="red" text = "Red" state = {setcolor}/>
          <Button colour="orange" text = "Orange" state = {setcolor}/>
          <Button colour="blue" text = "Blue" state = {setcolor}/>
          <Button colour="green" text = "Green" state = {setcolor}/>
        </div>
      </div>

    </div>
  )
}

export default App
