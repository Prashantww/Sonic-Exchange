import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/p2p" state={location}>
        P2P
      </Link>
    </div>
  );
};

export default Home;
