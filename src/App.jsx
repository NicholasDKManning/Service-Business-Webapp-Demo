import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="bg-green-600 text-white p-4 rounded">
        Tailwind CSS v4 is working!
      </div>
    
    </>
  )
}

export default App
