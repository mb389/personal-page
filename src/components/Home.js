import React from "react";
import Banner from "./layout/Banner";
import About from "./About";
import Technologies from "./Technologies";

const Home = () => (
  <div className="posts">
    <div className="post banner">
      <h2 className="post-title">
        I'm a full stack software engineer based in Brooklyn, NY.
      </h2>{" "}
      <p>
        I'm also an avid marathoner, world traveler, poker player, explorer of
        technology, and music obsessive. I have a passion for learning new
        skills and concepts and applying them to build cool stuff.{" "}
      </p>
    </div>
    <About />
    <Technologies />
    <Banner />
  </div>
);

export default Home;
