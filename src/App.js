import './styles.css';
import React from 'react';
import MetaTags from './MetaTags';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      {/* MetaTags */}
      <MetaTags />
      
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
