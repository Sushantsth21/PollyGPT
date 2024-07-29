import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Background from './Background';
import Chat from './Chat';
import Choose from './Choose';
import Translate from './Translate';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Background />
        <Routes>
          <Route path="/" element={<Choose />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
