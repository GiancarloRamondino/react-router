import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Personaggi from './pages/Personaggi.jsx';
import Contacts from './pages/Contacts.jsx';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/personaggi" element={<Personaggi />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
