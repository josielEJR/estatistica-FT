import { FaFutbol, FaChartLine, FaUsers } from 'react-icons/fa';
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroBtn,
  HeroFeatures,
  FeatureItem
} from './styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>Estatísticas do Brasileirão</HeroH1>
        <HeroP>
          Acompanhe as melhores estatísticas dos jogadores do Campeonato Brasileiro.
          Dados atualizados, análises detalhadas e muito mais.
        </HeroP>
        <HeroBtnWrapper>
          <HeroBtn to="/jogadores">Ver Jogadores</HeroBtn>
          <HeroBtn to="/estatisticas" secondary>Ver Estatísticas</HeroBtn>
        </HeroBtnWrapper>
        <HeroFeatures>
          <FeatureItem>
            <FaFutbol />
            <span>Dados em Tempo Real</span>
          </FeatureItem>
          <FeatureItem>
            <FaChartLine />
            <span>Análises Detalhadas</span>
          </FeatureItem>
          <FeatureItem>
            <FaUsers />
            <span>+500 Jogadores</span>
          </FeatureItem>
        </HeroFeatures>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 