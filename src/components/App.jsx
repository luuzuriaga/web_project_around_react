import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import '../index.css'; // Importa el CSS global

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;