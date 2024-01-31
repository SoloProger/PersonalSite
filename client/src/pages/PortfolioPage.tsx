import { portfolioList } from '../utils/portfolioList.ts';
import PortfolioCard from '../components/Cards/PortfolioCard.tsx';

function PortfolioPage() {
  return (
    <section className='portfolio'>
      {portfolioList.map((project) => (
        <PortfolioCard
          key={project.key}
          link={project.link}
          img={project.img}
          title={project.title}
          description={project.description}
          isButton={project.isButton}
        />
      ))}
    </section>
  );
}

export default PortfolioPage;
