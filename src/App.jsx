import React from "react";
import Profiles from "./components/Profiles";

const App = () => (
  <div className='App'>
    <header>
      <a href='https://vedaai.io' target='_blank'>
        <img src='assets/icon-01.svg' alt='logo' />
      </a>
      <h2>VedaVerse Pioneers</h2>
    </header>
    <main>
      <div className='para'>
        At VedaVerse, we are immensely proud to introduce our initial users —{" "}
        <strong>Pioneers</strong> who have trusted and embraced our products
        from the very beginning. These exceptional students have not only
        utilized our offerings to enhance their skills but have also provided
        invaluable feedback that has driven our innovation and growth. Their
        dedication and support have been instrumental in shaping our journey,
        and we hold them in the highest regard. Each profile below represents a
        unique story of ambition, resilience, and success. We are grateful for
        their continued partnership and look forward to celebrating many more
        achievements together.
      </div>
      <Profiles />
    </main>
  </div>
);

export default App;
