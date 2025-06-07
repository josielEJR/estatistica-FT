import Hero from '../../components/Hero';
import FeaturedTeams from '../../components/FeaturedTeams';
import TopScorers from '../../components/TopScorers';
import { Container, Title, PlayersGrid } from './styles';
import PlayerCard from '../../components/PlayerCard';

// Dados mockados para teste
const mockPlayers = [
  {
    name: "Endrick",
    team: "Palmeiras",
    goals: 12,
    number: 9,
    rating: 8.5
  },
  {
    name: "Gabriel Moscardo",
    team: "Corinthians",
    goals: 3,
    number: 8,
    rating: 7.8
  },
  {
    name: "Vitor Roque",
    team: "Athletico-PR",
    goals: 15,
    number: 9,
    rating: 8.9
  }
];

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <Title>Jogadores em Destaque</Title>
        <PlayersGrid>
          {mockPlayers.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </PlayersGrid>
      </Container>
      <FeaturedTeams />
      <TopScorers />
    </>
  );
};

export default Home;