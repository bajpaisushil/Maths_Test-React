import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Test from './pages/Test'
import Finish from './pages/Finish'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/test' element={<Test />} />
        <Route path='/finish' element={<Finish />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
