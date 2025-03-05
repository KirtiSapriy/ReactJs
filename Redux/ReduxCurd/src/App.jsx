import { useState } from 'react'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'
import Todolist from './Components/Todolist'

function App() {

  return (
    <>
      <Provider store={Store}>
        <Todolist></Todolist>
      </Provider>
    </>
  )
}

export default App
