import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Pet } from '../models/Pet'
import PetCard from './PetCard' // Ensure the import statement is correct

interface PetListProps {
  pets: Pet[]
}

const PetList: React.FC<PetListProps> = ({ pets }) => {
  return (
    <div className="PetList">
      <Row>
        {pets.map((pet) => (
          <Col lg={4} key={pet.id}>
            <PetCard pet={pet} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PetList
