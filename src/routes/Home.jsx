import React from "react";
import CoinSearch from "../components/CoinSearch";

function Home({ coins }) {
  return (
    <div>
      <h1>
        <CoinSearch coins={coins} />
      </h1>
    </div>
  );
}

export default Home;
