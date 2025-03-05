import { useState } from 'react'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'
import Data from './Components/Data'
import JsonData from './Components/JsonData'
function App() {

  return (<>
    <Provider store={Store}>
      {/* <Data></Data> */}
      <JsonData></JsonData>
    </Provider>
  </>)
}

export default App
