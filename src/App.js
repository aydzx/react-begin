// import '../index.scss';
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Counter, Modal, Quiz, UsersPage } from './pages/';

function App() {

  return (
  <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
  </>

  );
}

export default App;
