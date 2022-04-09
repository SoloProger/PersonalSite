import React from "react";
//Стили
import "../styles/PortfolioPage.css";
import { portfolioList } from "../utils/portfolioList";
import PortfolioCard from "../components/Cards/PortfolioCard";

const Portfoliopage = () => {
  return (
    <section className="portfolio">
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
};

export default Portfoliopage;
