import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.8);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  gap: 10px;

  svg {
    font-size: 2rem;
  }

  &:hover {
    color: #646cff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? '90vh' : '0')};
    position: absolute;
    top: 80px;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: all 0.3s ease-in;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
    overflow: hidden;
    padding: ${({ isOpen }) => (isOpen ? '2rem 0' : '0')};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 1rem 0;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #646cff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`; 