import { FaFutbol, FaTshirt, FaSort, FaSortUp, FaSortDown, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
  SectionContainer,
  SectionTitle,
  ContentWrapper,
  TopScorersList,
  ScorerCard,
  ScorerInfo,
  ScorerName,
  ScorerTeam,
  ScorerStats,
  StatItem,
  ChartContainer,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  SortButton,
  TableTitle,
  SearchContainer,
  SearchInput,
  FilterSelect,
  ViewAllButton
} from './styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TopScorers = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'goals', direction: 'desc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  // Dados mockados para teste
  const scorers = [
    {
      name: "Endrick",
      team: "Palmeiras",
      goals: 12,
      assists: 5,
      matches: 15,
      minutes: 1350,
      goalsPerMatch: 0.8
    },
    {
      name: "Vitor Roque",
      team: "Athletico-PR",
      goals: 15,
      assists: 3,
      matches: 18,
      minutes: 1620,
      goalsPerMatch: 0.83
    },
    {
      name: "Gabriel Moscardo",
      team: "Corinthians",
      goals: 8,
      assists: 7,
      matches: 20,
      minutes: 1800,
      goalsPerMatch: 0.4
    },
    {
      name: "Pedro",
      team: "Flamengo",
      goals: 10,
      assists: 4,
      matches: 16,
      minutes: 1440,
      goalsPerMatch: 0.63
    },
    {
      name: "Hulk",
      team: "Atlético-MG",
      goals: 9,
      assists: 6,
      matches: 17,
      minutes: 1530,
      goalsPerMatch: 0.53
    }
  ];

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Filtrar times únicos para o select
  const teams = [...new Set(scorers.map(scorer => scorer.team))];

  // Filtrar e ordenar os dados
  const filteredAndSortedScorers = [...scorers]
    .filter(scorer => {
      const matchesSearch = scorer.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTeam = selectedTeam === '' || scorer.team === selectedTeam;
      return matchesSearch && matchesTeam;
    })
    .sort((a, b) => {
      if (sortConfig.direction === 'asc') {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      }
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    });

  const chartData = {
    labels: scorers.map(scorer => scorer.name),
    datasets: [
      {
        label: 'Gols',
        data: scorers.map(scorer => scorer.goals),
        backgroundColor: '#646cff',
        borderColor: '#4a4fff',
        borderWidth: 1,
      },
      {
        label: 'Assistências',
        data: scorers.map(scorer => scorer.assists),
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Artilharia do Brasileirão',
        font: {
          size: 16
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Quantidade'
        }
      }
    }
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort />;
    return sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <SectionContainer>
      <SectionTitle>Artilharia</SectionTitle>
      <ContentWrapper>
        <TopScorersList>
          {scorers.map((scorer, index) => (
            <ScorerCard key={index}>
              <ScorerInfo>
                <ScorerName>{scorer.name}</ScorerName>
                <ScorerTeam>{scorer.team}</ScorerTeam>
              </ScorerInfo>
              <ScorerStats>
                <StatItem>
                  <FaFutbol />
                  <span>{scorer.goals} gols</span>
                </StatItem>
                <StatItem>
                  <FaTshirt />
                  <span>{scorer.assists} assistências</span>
                </StatItem>
              </ScorerStats>
            </ScorerCard>
          ))}
        </TopScorersList>
        <ChartContainer>
          <Bar data={chartData} options={chartOptions} />
        </ChartContainer>
      </ContentWrapper>
      <TableContainer>
        <TableTitle>Tabela de Artilharia</TableTitle>
        <SearchContainer>
          <SearchInput>
            <FaSearch />
            <input
              type="text"
              placeholder="Buscar jogador..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchInput>
          <FilterSelect
            value={selectedTeam}
            placeholder="Buscar Time...."
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            <option value="">Todos os times</option>
            {teams.map((team, index) => (
              <option key={index} value={team}>{team}</option>
            ))}
          </FilterSelect>
        </SearchContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>
                <SortButton onClick={() => handleSort('name')}>
                  Jogador {getSortIcon('name')}
                </SortButton>
              </TableHeader>
              <TableHeader>
                <SortButton onClick={() => handleSort('team')}>
                  Time {getSortIcon('team')}
                </SortButton>
              </TableHeader>
              <TableHeader>
                <SortButton onClick={() => handleSort('goals')}>
                  Gols {getSortIcon('goals')}
                </SortButton>
              </TableHeader>
              <TableHeader>
                <SortButton onClick={() => handleSort('assists')}>
                  Assistências {getSortIcon('assists')}
                </SortButton>
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {filteredAndSortedScorers.map((scorer, index) => (
              <TableRow key={index}>
                <TableCell>{scorer.name}</TableCell>
                <TableCell>{scorer.team}</TableCell>
                <TableCell>{scorer.goals}</TableCell>
                <TableCell>{scorer.assists}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        <ViewAllButton to="/artilharia-completa">
          Ver Tabela Completa
        </ViewAllButton>
      </TableContainer>
    </SectionContainer>
  );
};

export default TopScorers; 