import { useState } from 'react'
import './App.css'
import MainRouter from './Routes/MainRouter'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  const [Search, setSearch] = useState("")

  return (
    <>
      <Header setSearch={setSearch} search={Search}></Header>

      <MainRouter Search={Search} />
      <Footer></Footer>    </>
  )
}

export default App
