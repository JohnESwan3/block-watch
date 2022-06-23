import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

function Home({ coins }) {
  return (
    <div>
      <h1>
        <CoinSearch coins={coins} />
        <Trending />
      </h1>
    </div>
  );
}

export default Home;
