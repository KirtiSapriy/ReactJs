import { useState } from 'react'
import './App.css'
import Counter from "./components/Couter"
import { Provider } from 'react-redux'
import Store  from './app/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={Store}>
        <Counter />
      </Provider>
    </>
  )

}

export default App
