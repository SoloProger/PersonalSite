import Form from '../components/Forms/Form.tsx';
import AboutCard from '../components/Cards/AboutCard.js';
import { aboutCardList } from '../utils/aboutCardList.ts';

export default function AboutPage() {
  return (
    <main>
      <section className='about-card'>
        {aboutCardList.map((card) => (
          <AboutCard
            title={card.title}
            description={card.description}
            buttonLink={card.buttonLink}
            buttonTitle={card.buttonTitle}
            isButton={card.isButton}
          />
        ))}
      </section>
      <Form />
    </main>
  );
}
