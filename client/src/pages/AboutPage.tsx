import AboutCard from "../components/Cards/AboutCard";
import { aboutCardList } from "../utils/aboutCardList";

export default function AboutPage() {
  return (
    <main>
      <section className="about-card">
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
    </main>
  );
}