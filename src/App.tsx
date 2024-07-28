import React, { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/header'
import { PetDetails } from './components/petDetails'
import PetList from './components/petList'
import SearchBar from './components/SearchBar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { getPets } from './services/petService'
import { Pet } from './models/Pet'

function App() {
  const [pets, setPets] = useState<Pet[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const initialPets = await getPets()
      setPets(initialPets)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Router>
        <Header setPets={setPets} /> {/* Pass setPets to Header */}
        <Routes>
          <Route path="/" element={<PetList pets={pets} />} />
          <Route path="/details/:id" element={<PetDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
