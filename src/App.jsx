import React from "react";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Leaderboard />
    </>
  );
};

export default App;
