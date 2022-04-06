import React from "react";
import Card from "../Cards/Card";

const LatestPost = () => {
  return (
    <section className="latest-post-wrapper">
      <div className="latest-post-navbar">
        <h2>Последние посты</h2>
        <a href="#">Посмотреть все</a>
      </div>
      <div className="latest-posts">
        {/* Post */}
        <div className="latest-post">
          <h2>Making a design system from scratch</h2>
          <div className="post-subtitle">
            <h4 className="first">12 Feb 2020</h4>
            <h4>Development</h4>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        {/* EndPost */}
        {/* Post */}
        <div className="latest-post">
          <h2>Creating pixel perfect icons in Figma</h2>
          <div className="post-subtitle">
            <h4 className="first">12 Feb 2020</h4>
            <h4>Development</h4>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        {/* EndPost */}
      </div>
    </section>
  );
};

export default LatestPost;
