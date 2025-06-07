import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
`;

export const PlayersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
`; 