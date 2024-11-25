// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './style.css';

import Header from './Header';
import GreetingCard from './GreetingCards';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center p-5">
        <GreetingCard
          title="Happy Birthday!"
          message="Wishing you a fantastic day filled with joy!"
        />
        <GreetingCard
          title="Congratulations!"
          message="Great job on your achievement!"
        />
        <GreetingCard
          title="Thank You!"
          message="Thanks for your kindness and support!"
        />
      </main>
    </div>
  );
};

export default App;
