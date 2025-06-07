import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionContainer = styled.section`
  padding: 60px 20px;
  background: #fff;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const TopScorersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ScorerCard = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

export const ScorerInfo = styled.div`
  flex: 1;
`;

export const ScorerName = styled.h3`
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 0;
`;

export const ScorerTeam = styled.p`
  color: #666;
  margin: 5px 0 0;
  font-size: 0.9rem;
`;

export const ScorerStats = styled.div`
  display: flex;
  gap: 20px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2c3e50;
  font-size: 1rem;

  svg {
    color: #646cff;
  }
`;

export const ChartContainer = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  height: 400px;

  @media screen and (max-width: 968px) {
    height: 300px;
  }
`;

export const TableContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  overflow-x: auto;
`;

export const TableTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background: #646cff;
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: 500;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }

  &:hover {
    background: #f1f3f5;
  }
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  color: #2c3e50;
  border-bottom: 1px solid #eee;
`;

export const SortButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  font-weight: 500;
  padding: 0;

  &:hover {
    opacity: 0.9;
  }

  svg {
    font-size: 0.8rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.div`
  flex: 1;
  position: relative;
  min-width: 200px;

  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }

  input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #646cff;
      box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2);
    }
  }
`;

export const FilterSelect = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-width: 200px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  color: black;

  &:focus {
    outline: none;
    border-color: #646cff;
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2);
  }
`;

export const ViewAllButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 20px auto 0;
  padding: 12px 24px;
  background: #646cff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #4a4fff;
    transform: translateY(-2px);
  }
`; 