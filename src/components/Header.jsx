import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import { FaTelegramPlane, FaVk } from 'react-icons/fa';
import iconPhone from "/assets/icons/phone.svg";
import iconProchip52 from "/assets/icons/prochip52.svg";

export default function Header({ setModalOpen }) {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // При переходе на главную — скроллим к сохранённому блоку
  useEffect(() => {
  if (location.pathname === '/') {
    const savedId = localStorage.getItem('scrollTarget');
    if (savedId) {
      const tryScroll = () => {
        const el = document.getElementById(savedId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          localStorage.removeItem('scrollTarget');
        } else {
          setTimeout(tryScroll, 100); // Пробуем снова, пока DOM не готов
        }
      };
      tryScroll();
    }
  }
}, [location.pathname]);


  // Отслеживание видимой секции
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Закрытие меню по ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const scrollToSection = (id) => {
    localStorage.setItem('scrollTarget', id); // сохраняем перед переходом

    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={iconProchip52} alt="PROCHIP52" className="logo-img" />
      </a>

      <button className="burger-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню">
        ☰
      </button>

      <nav className="nav">
        <button onClick={() => scrollToSection('hero')} className={activeSection === 'hero' ? 'active' : ''}>О нас</button>
        <button onClick={() => scrollToSection('steps')} className={activeSection === 'steps' ? 'active' : ''}>Как работаем</button>
        <button onClick={() => scrollToSection('models')} className={activeSection === 'models' ? 'active' : ''}>Чип-Тюнинг</button>
        <button onClick={() => scrollToSection('faq')} className={activeSection === 'faq' ? 'active' : ''}>Вопросы</button>
      </nav>

      <div className="contacts">
        <img src={iconPhone} alt="Телефон" className="faq-icon" />
        <a href="tel:+79201111490" target="_blank" rel="noreferrer">
          <span className="phone"> +7 (920) 111-14-90</span>
        </a>
        <a href="https://t.me/prochip52" target="_blank" rel="noreferrer">
          <FaTelegramPlane size={20} color="#facc15" />
        </a>
        <a href="https://vk.com/prochip52" target="_blank" rel="noreferrer" style={{ marginLeft: '10px' }}>
          <FaVk size={20} color="#facc15" />
        </a>
      </div>

      <button className="cta-button" onClick={() => setModalOpen(true)}>
        ОСТАВИТЬ ЗАЯВКУ
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <img src={iconProchip52} alt="PROCHIP52" className="mobile-logo" />
          <button onClick={() => scrollToSection('hero')}>О нас</button>
          <button onClick={() => scrollToSection('steps')}>Как работаем</button>
          <button onClick={() => scrollToSection('models')}>Чип-Тюнинг</button>
          <button onClick={() => scrollToSection('faq')}>Вопросы</button>
          <a href="tel:+79201111490" className="phone-link">📞 +7 (920) 111-14-90</a>
          <div className="social-links">
            <a href="https://t.me/prochip52" target="_blank" rel="noreferrer">
              <FaTelegramPlane size={24} color="#facc15" />
            </a>
            <a href="https://vk.com/prochip52" target="_blank" rel="noreferrer" style={{ marginLeft: '16px' }}>
              <FaVk size={24} color="#facc15" />
            </a>
          </div>
          <button className="cta-button" onClick={() => { setModalOpen(true); setMenuOpen(false); }}>
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      )}
    </header>
  );
}
