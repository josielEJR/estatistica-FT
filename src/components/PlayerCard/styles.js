import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PlayerName = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.5rem;
  text-align: center;
`;

export const TeamName = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 15px;
  text-align: center;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 100%;
  padding: 0 10px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #444;
  gap: 5px;
`;

export const StatValue = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
`; 