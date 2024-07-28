import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pet } from '../models/Pet'
import { getPetById } from '../services/petService'
import { Card, Col, Row } from 'react-bootstrap'
import '../components/css/petDetails.css'

export function PetDetails() {
  const { id } = useParams()
  const [pet, setPet] = useState<Pet | null>(null)

  useEffect(() => {
    if (id !== undefined) {
      getPetById(Number(id)).then((pet) => {
        setPet(pet)
      })
    }
  }, [id])

  return (
    <div className="PetDetails">
      {pet && (
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Card>
              <Card.Img
                variant="top"
                src={`/img/${pet.image}`}
                alt={pet.name}
              />
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
                  <strong>Gender:</strong> {pet.isBoy ? 'Boy' : 'Girl'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2}></Col>
        </Row>
      )}
    </div>
  )
}
