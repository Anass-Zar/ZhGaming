import './App.css'
import { BrowserRouter , Route , Routes} from "react-router-dom"
import { Home } from './pages/Home'
import GameDeatails from './pages/GameDetails'
import { Profile } from './pages/Profile'
import { Cart } from './pages/Cart'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/gamedetails/:id' element={<GameDeatails/> }/>
        <Route path='/profile' element={<Profile/> }/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
