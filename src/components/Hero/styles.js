import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('/heroFt.png') center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 35px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 35px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroBtn = styled(Link)`
  border-radius: 50px;
  background: ${({ secondary }) => (secondary ? 'transparent' : '#646cff')};
  white-space: nowrap;
  padding: ${({ secondary }) => (secondary ? '14px 48px' : '16px 64px')};
  color: #fff;
  font-size: ${({ secondary }) => (secondary ? '20px' : '24px')};
  outline: none;
  border: ${({ secondary }) => (secondary ? '2px solid #646cff' : 'none')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ secondary }) => (secondary ? '#646cff' : '#4a4fff')};
  }
`;

export const HeroFeatures = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 18px;

  svg {
    font-size: 24px;
    color: #646cff;
  }
`; 