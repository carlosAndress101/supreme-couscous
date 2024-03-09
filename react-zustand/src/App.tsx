import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import LoginPage from "./pages/Login/LoginPage"
import { ProtectedRoute } from "./components/Navbar/ProtectedRoute"
import { useAuthStore } from './store/auth'

const App = () => {

  const isAuth = useAuthStore(state =>  state.isAuth)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<ProtectedRoute isAllowed={isAuth}><Home/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
