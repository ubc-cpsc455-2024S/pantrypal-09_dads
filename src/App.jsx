import './App.css'
import HomePage from './components/home/HomePage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RecipeInstructions from './components/recipe/Recipe'
import RecipePage from './components/recipe/RecipePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IngredientsPage from './components/ingredients/IngredientsPage'
import DietPage from './components/diet/DietPage'
import InsertIngredientsPage from './components/ingredients/IngredientsPage'

function App() {

  return (
    <>
      <Navbar />

      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />
            <Route path="/diet" element={<DietPage />} />
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
