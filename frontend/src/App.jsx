import './App.css'
import { useAuthContext } from './hooks/useAuthContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFoundPage from './pages/NotFound'
import Navbar from './components/Navbar/Navbar'
import IngredientsPage from './pages/IngredientsPage'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/pantry" 
              element={user ? <IngredientsPage /> : <></>}
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage/>} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
