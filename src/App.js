import React from 'react';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 text-gray-800 p-4">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-2xl font-bold text-center text-white">TAMANG ORAS 🚦</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
