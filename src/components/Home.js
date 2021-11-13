import React from "react";
import Banner from "./layout/Banner";
import About from "./About";
import Technologies from "./Technologies";

const Home = () => (
  <div className="posts">
    <div className="post banner">
      <h2 className="post-title">
        I'm a software engineer based in Brooklyn, NY.
      </h2>{" "}
      <p>
        I'm also an avid marathoner, world traveler, poker player, explorer of
        new technologies, crypto enthusiast, and music obsessive. I have a
        passion for learning new skills and concepts and applying them to build
        cool stuff.<sup>TM</sup>{" "}
      </p>
    </div>
    <About />
    {/* <Technologies /> */}
    <Banner />
  </div>
);

export default Home;
