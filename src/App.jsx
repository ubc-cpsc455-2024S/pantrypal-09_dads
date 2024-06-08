import './App.css'
import Home from './components/home/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RecipeInstructions from './components/recipe/Recipe'
import RecipePage from './components/recipe/RecipePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Navbar />

      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipePage />} />
            <Route path="/recipes/temp" element={<RecipeInstructions />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
      
    </>
  )
}

export default App
