import './App.css'
import { useAuthContext } from './hooks/useAuthContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import Signup from './pages/SignupPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import IngredientsPage from './pages/IngredientsPage'
import PreferencePage from './pages/PreferencePage'
import AboutPage from './pages/AboutPage'
import RecipePage from './pages/RecipePage'


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
              path="/about" 
              element={user ? <AboutPage /> : <></>}
            />
            <Route 
              path="/preference" 
              element={user ? <PreferencePage /> : <></>}
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
            {/* Dynamic Component */}
            <Route path="recipes/:id" element={<RecipePage />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
