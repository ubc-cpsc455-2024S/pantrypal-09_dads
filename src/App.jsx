import './App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />

      <div className="body">
        <Hero />

      </div>

      <Footer />
      
    </>
  )
}

export default App
