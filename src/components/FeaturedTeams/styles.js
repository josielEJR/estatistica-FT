import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 60px 20px;
  background: #f8f9fa;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

export const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TeamCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const TeamLogo = styled.div`
  width: 60px;
  height: 60px;
  background: #646cff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

export const TeamInfo = styled.div`
  flex: 1;
`;

export const TeamName = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  margin: 0;
`;

export const TeamPosition = styled.p`
  color: #666;
  margin: 5px 0 0;
`;

export const TeamStats = styled.div`
  margin: 20px 0;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #2c3e50;
  font-size: 1.1rem;

  svg {
    color: #646cff;
  }
`;

export const LastResults = styled.div`
  margin: 20px 0;

  h4 {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export const ResultItem = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  background: ${({ result }) => {
    switch (result) {
      case 'V':
        return '#4CAF50';
      case 'E':
        return '#FFC107';
      case 'D':
        return '#F44336';
      default:
        return '#ccc';
    }
  }};
  color: white;
`;

export const NextMatch = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;

  h4 {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #666;

    svg {
      color: #646cff;
    }
  }
`; 