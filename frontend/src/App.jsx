import './App.css'
import { useSelector, useDispatch} from 'react-redux'
import HomePage from './components/home/HomePage'
import Footer from './components/misc/Footer'
import Navbar from './components/misc/Navbar'
import RecipeInstructions from './components/recipe/Recipe'
import RecipePage from './components/recipe/RecipePage'
import IngredientsPage from './components/ingredients/IngredientsPage'
import DietPage from './components/diet/DietPage'
import LoadingPage from './components/misc/Loading'

function App() {
  const dispatch = useDispatch()

  const status = useSelector((state) => state.user.status);
  console.log(status)

  return (
    <>
      <Navbar />

      <div className="body">
        {status==='loading' && <LoadingPage />}
        {status==='default' && <HomePage dispatch={dispatch}/>}
        {status==='ingredients' && <IngredientsPage dispatch={dispatch} />}
        {status==='dietary' && <DietPage />}
        {status==='recipes' && <RecipePage />}
        {status==='recipes/temp' && <RecipeInstructions />}

        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={status==='home'?<HomePage dispatch={dispatch} /> : <NotFoundPage/>} />
            <Route path="/ingredients" element={status==='ing'?<IngredientsPage /> : <NotFoundPage/>} />
            <Route path="/diet" element={status==='diet'?<DietPage /> : <NotFoundPage/>} />
            <Route path="/recipes" element={status==='recipes'?<RecipePage /> : <NotFoundPage/>} />
            <Route path="/recipes/temp" element={<RecipeInstructions />} />
          </Routes>
        </BrowserRouter> */}
      </div>

      <Footer />
      
    </>
  )
}

export default App
