import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Models from './components/Models';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import BrandPage from './pages/BrandPage';
import Policy from './pages/Policy';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header setModalOpen={setModalOpen} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <Routes>
        {/* Главная страница */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Steps />
              <Models />
              <Faq />
              <Footer />
            </main>
          }
        />

        {/* Страница бренда */}
        <Route path="/brand/:brandName" element={<BrandPage />} />
        <Route path="/policy" element={<Policy />} /> {/* Страница политики */}

        </Routes>
    </>
  );
}

export default App;
