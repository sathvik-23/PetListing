import { Navbar, Container, Nav } from 'react-bootstrap'
import '../components/css/header.css'
import SearchBar from './SearchBar' // Import the SearchBar component
import { Pet } from '../models/Pet'

interface HeaderProps {
  setPets: React.Dispatch<React.SetStateAction<Pet[]>>
}

export const Header: React.FC<HeaderProps> = ({ setPets }) => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/img/PetFinderLogo.png" alt="" width="80" height={80}></img>
        </Navbar.Brand>
        <Nav className="d-flex justify-content-center w-100">
          <h1 className="text-center text-white">Pets-Zonee</h1>
        </Nav>
        <SearchBar setPets={setPets} /> {/* Add the SearchBar component */}
      </Container>
    </Navbar>
  )
}

export default Header
