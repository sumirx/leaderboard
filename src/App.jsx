import React from "react";
import Profiles from "./components/Profiles";

const App = () => (
  <div className='App'>
    <header>
      <a href='https://vedaai.io' target='_blank'>
        <img src='assets/logo-black-transparent.png' alt='logo' />
      </a>
      <h2>VedaVerse Pioneers</h2>
    </header>
    <main>
      <Profiles />
    </main>
  </div>
);

export default App;
