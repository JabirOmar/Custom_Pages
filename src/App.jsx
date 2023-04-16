import { Route, Routes } from 'react-router-dom'
import './App.css'
import Codi_Lacag from './pages/Codi_Lacag'
import Shidaalka from './pages/Shidaalka'
import Buttons from './pages/Buttons'
import Rental_Contract from './pages/Rental_Contract'
import Contract_Agreement from './pages/Contract_Agreement'

function App() {

  return (
    <div className=" w-screen h-fit flex justify-center p-10">
    <Routes>
      <Route path='/' element={<Buttons />} />
      <Route path='/codsi_lacag' element={<Codi_Lacag />} />
      <Route path='/shidaalka' element={<Shidaalka />} />
      <Route path='/rental_contract' element={<Rental_Contract />} />
      <Route path='/contract_agreement' element={<Contract_Agreement />} />
    </Routes>
    </div>
  )
}

export default App
