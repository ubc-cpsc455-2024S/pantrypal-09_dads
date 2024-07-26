import './App.css'
import { useAuthContext } from './hooks/useAuthContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import RecipeInstructions from './components/recipe/Recipe'
import RecipePage from './components/recipe/RecipePage'
import IngredientsPage from './components/ingredients/IngredientsPage'
import DietPage from './components/diet/DietPage'
import LoadingPage from './components/misc/Loading'
import HomePage from './components/home/HomePage'
import NotFoundPage from './pages/NotFound'


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
