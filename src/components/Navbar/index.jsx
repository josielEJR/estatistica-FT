import { FaFutbol, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon
} from './styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <FaFutbol />
          <span>Brasileirão Stats</span>
        </NavLogo>

        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink to="/">Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jogadores">Jogadores</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/times">Times</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/estatisticas">Estatísticas</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 