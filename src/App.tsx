import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Acceuil from './pages/Acceuil'
import Produits from './pages/Produits'
import Contacts from './pages/Contacts'
import Apropos from './pages/Apropos'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="*" element={<NotFound />} />
            
            {/* Redirection pour les anciennes routes */}
            <Route path="/Produits" element={<Produits />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Apropos" element={<Apropos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App