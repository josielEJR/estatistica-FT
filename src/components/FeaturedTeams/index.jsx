import { FaTrophy, FaCalendarAlt, FaFutbol } from 'react-icons/fa';
import {
  SectionContainer,
  SectionTitle,
  TeamsGrid,
  TeamCard,
  TeamHeader,
  TeamLogo,
  TeamInfo,
  TeamName,
  TeamPosition,
  TeamStats,
  StatItem,
  LastResults,
  ResultItem,
  NextMatch
} from './styles';

const FeaturedTeams = () => {
  // Dados mockados para teste
  const teams = [
    {
      name: "Palmeiras",
      position: 1,
      points: 45,
      lastResults: ["V", "V", "E", "V", "D"],
      nextMatch: {
        opponent: "Flamengo",
        date: "2024-03-20",
        time: "20:00"
      }
    },
    {
      name: "Botafogo",
      position: 2,
      points: 42,
      lastResults: ["V", "E", "V", "V", "V"],
      nextMatch: {
        opponent: "São Paulo",
        date: "2024-03-21",
        time: "19:30"
      }
    },
    {
      name: "Flamengo",
      position: 3,
      points: 40,
      lastResults: ["V", "D", "V", "E", "V"],
      nextMatch: {
        opponent: "Palmeiras",
        date: "2024-03-20",
        time: "20:00"
      }
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Times em Destaque</SectionTitle>
      <TeamsGrid>
        {teams.map((team, index) => (
          <TeamCard key={index}>
            <TeamHeader>
              <TeamLogo>
                <FaTrophy />
              </TeamLogo>
              <TeamInfo>
                <TeamName>{team.name}</TeamName>
                <TeamPosition>{team.position}º lugar</TeamPosition>
              </TeamInfo>
            </TeamHeader>
            <TeamStats>
              <StatItem>
                <FaTrophy />
                <span>{team.points} pontos</span>
              </StatItem>
            </TeamStats>
            <LastResults>
              <h4>Últimos resultados:</h4>
              <div>
                {team.lastResults.map((result, idx) => (
                  <ResultItem key={idx} result={result}>
                    {result}
                  </ResultItem>
                ))}
              </div>
            </LastResults>
            <NextMatch>
              <h4>Próximo jogo:</h4>
              <div>
                <FaCalendarAlt />
                <span>{team.nextMatch.opponent}</span>
                <span>{team.nextMatch.date}</span>
                <span>{team.nextMatch.time}</span>
              </div>
            </NextMatch>
          </TeamCard>
        ))}
      </TeamsGrid>
    </SectionContainer>
  );
};

export default FeaturedTeams; 