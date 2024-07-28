import React from 'react'
import { Card } from 'react-bootstrap'
import { Pet } from '../models/Pet'
import { Link } from 'react-router-dom'
import '../components/css/petcard.css' // Ensure this path is correct

interface PetCardProps {
  pet: Pet
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <Card>
      <Card.Img variant="top" src={`img/${pet.image}`} alt={`${pet.name}`} />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Text>
          <strong>Name:</strong> {pet.name}
          <br />
          <strong>Description:</strong> {pet.description}
          <br />
          <strong>Breed:</strong> {pet.breed}
          <br />
          <strong>Animal:</strong> {pet.animal}
          <br />
          <strong>City:</strong> {pet.city}
          <br />
          <strong>State:</strong> {pet.state}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={`/details/${pet.id}`} className="btn btn-secondary ml-2">
          Details
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default PetCard
