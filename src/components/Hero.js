import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import './Hero.css';

function Hero({ onExplore }) {
  return (
    <div className="hero-container">
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" 
          alt="Горы"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-icon">
          <Compass size={60} strokeWidth={1.5} />
        </div>
        
        <h1 className="hero-title">Бесстрашное<br />Путешествие</h1>
        
        <p className="hero-subtitle">
          Исследуйте новые места<br />без страха
        </p>
        
        <button className="hero-button" onClick={onExplore}>
          <span>Начать путешествие</span>
          <ArrowRight size={20} />
        </button>
        
        <div className="hero-login">
          Уже есть аккаунт? <span className="login-link">Войти</span>
        </div>
      </div>
      
      <div className="hero-indicator">
        <div className="indicator-bar"></div>
      </div>
    </div>
  );
}

export default Hero;
