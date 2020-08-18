import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import TokenForm from './components/TokenForm';
import TokenCard from './components/TokenCard';

function App() {
  const token = useSelector((state) => state.token);

  return (
    <div>
      <Header />
      { !token
        ? <TokenForm />
        : <TokenCard />
      }
    </div>
  );
}

export default App;
