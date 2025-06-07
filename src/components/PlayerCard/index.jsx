import { FaFutbol, FaTshirt, FaChartLine } from 'react-icons/fa';
import {
  Card,
  PlayerName,
  TeamName,
  StatsContainer,
  Stat,
  StatValue
} from './styles';

const PlayerCard = ({ player }) => {
  return (
    <Card>
      <PlayerName>{player.name}</PlayerName>
      <TeamName>{player.team}</TeamName>
      <StatsContainer>
        <Stat>
          <FaFutbol />
          <StatValue>{player.goals}</StatValue>
          <span>Gols</span>
        </Stat>
        <Stat>
          <FaTshirt />
          <StatValue>{player.number}</StatValue>
          <span>Número</span>
        </Stat>
        <Stat>
          <FaChartLine />
          <StatValue>{player.rating}</StatValue>
          <span>Nota</span>
        </Stat>
      </StatsContainer>
    </Card>
  );
};

export default PlayerCard; 