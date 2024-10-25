import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Landing from './Pages/Landing'
import Ourstory from './Pages/Ourstory'
import Wheretobuy from './Pages/Wheretobuy'
import Contact from './Pages/Contact'



function App() {

  return (
    <>
   <Header/>

<Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='/ourstory' element={<Ourstory/>} />
  <Route path='/wheretobuy' element={<Wheretobuy/>} />
  <Route path='/contact' element={<Contact/>}/>
</Routes>
   <Footer/>
 </>
  )
}

export default App
