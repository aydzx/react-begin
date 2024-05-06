// import '../index.scss';
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Counter, Modal, Quiz } from './pages/';

function App() {

  return (
  <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
  </>

  );
}

export default App;
