import React, { useState } from 'react'
import { getPets } from '../services/petService'
import { Pet } from '../models/Pet'
import { useNavigate } from 'react-router-dom'

interface SearchBarProps {
  setPets: React.Dispatch<React.SetStateAction<Pet[]>>
}

const SearchBar: React.FC<SearchBarProps> = ({ setPets }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const navigate = useNavigate()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim() === '') {
      const allPets = await getPets()
      setPets(allPets)
      navigate('/')
    } else {
      const pets = await getPets(searchTerm)
      if (pets.length === 0) {
        alert('Search not found')
        const allPets = await getPets()
        setPets(allPets)
        navigate('/')
      } else {
        setPets(pets)
      }
    }
  }

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for pets..."
        className="form-control me-2"
      />
      <button type="submit" className="btn btn-secondary">
        Search
      </button>
    </form>
  )
}

export default SearchBar
