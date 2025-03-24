import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import Acceuil from './pages/Acceuil.tsx'
import Services from './pages/Services.tsx'
import Projets from './pages/Projets.tsx'
import Contacts from './pages/Contacts.tsx'
import Apropos from './pages/Apropos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Projets' element={<Projets/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/Apropos' element={<Apropos/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
