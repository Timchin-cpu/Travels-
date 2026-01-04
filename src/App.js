import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import MainScreen from './components/MainScreen';
import JourneyScreen from './components/JourneyScreen';
import Recommendations from './components/Recommendations';
import Profile from './components/Profile';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Settings from './components/Settings';
import { Menu, X } from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Автоматический переход с героя на главный экран через 3 секунды
    if (currentScreen === 'hero') {
      const timer = setTimeout(() => {
        setCurrentScreen('main');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleNavigation = (screen) => {
    setCurrentScreen(screen);
    setMenuOpen(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'hero':
        return <Hero onExplore={() => setCurrentScreen('main')} />;
      case 'main':
        return <MainScreen onNavigate={setCurrentScreen} />;
      case 'journey':
        return <JourneyScreen onBack={() => setCurrentScreen('main')} />;
      case 'recommendations':
        return <Recommendations onNavigate={setCurrentScreen} />;
      case 'profile':
        return <Profile onNavigate={setCurrentScreen} />;
      case 'search':
        return <Search onNavigate={setCurrentScreen} />;
      case 'favorites':
        return <Favorites onNavigate={setCurrentScreen} />;
      case 'settings':
        return <Settings onNavigate={setCurrentScreen} />;
      default:
        return <MainScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="App">
      {currentScreen !== 'hero' && (
        <nav className="main-nav">
          <div className="nav-content">
            <div 
              className="nav-logo"
              onClick={() => handleNavigation('main')}
            >
              Travels
            </div>
            <button 
              className="nav-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <li 
                className={currentScreen === 'main' ? 'active-nav' : ''}
                onClick={() => handleNavigation('main')}
              >
                Главная
              </li>
              <li 
                className={currentScreen === 'journey' ? 'active-nav' : ''}
                onClick={() => handleNavigation('journey')}
              >
                Мои путешествия
              </li>
              <li 
                className={currentScreen === 'recommendations' ? 'active-nav' : ''}
                onClick={() => handleNavigation('recommendations')}
              >
                Рекомендации
              </li>
              <li 
                className={currentScreen === 'favorites' ? 'active-nav' : ''}
                onClick={() => handleNavigation('favorites')}
              >
                Избранное
              </li>
              <li 
                className={currentScreen === 'profile' ? 'active-nav' : ''}
                onClick={() => handleNavigation('profile')}
              >
                Профиль
              </li>
            </ul>
          </div>
        </nav>
      )}
      {renderScreen()}
    </div>
  );
}

export default App;
