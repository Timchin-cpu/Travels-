import React, { useState } from 'react';
import { Star, MapPin, Heart, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';
import './Recommendations.css';

function Recommendations({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('popular');

  const categories = [
    { id: 'popular', name: 'Популярное', icon: TrendingUp },
    { id: 'new', name: 'Новое', icon: Clock },
    { id: 'group', name: 'Групповые', icon: Users }
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Лофотенские острова',
      country: 'Норвегия',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80',
      rating: 4.9,
      reviews: 2847,
      price: 5200,
      duration: '7 дней',
      difficulty: 'Средняя',
      liked: false,
      category: 'popular'
    },
    {
      id: 2,
      name: 'Мачу-Пикчу',
      country: 'Перу',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
      rating: 4.8,
      reviews: 3291,
      price: 4800,
      duration: '5 дней',
      difficulty: 'Сложная',
      liked: true,
      category: 'popular'
    },
    {
      id: 3,
      name: 'Исландские фьорды',
      country: 'Исландия',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80',
      rating: 4.7,
      reviews: 1923,
      price: 6100,
      duration: '10 дней',
      difficulty: 'Средняя',
      liked: false,
      category: 'new'
    },
    {
      id: 4,
      name: 'Санторини',
      country: 'Греция',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      rating: 4.9,
      reviews: 4156,
      price: 3200,
      duration: '6 дней',
      difficulty: 'Легкая',
      liked: true,
      category: 'popular'
    },
    {
      id: 5,
      name: 'Патагония',
      country: 'Аргентина/Чили',
      image: 'https://images.unsplash.com/photo-1611160483099-29a56c5a9df1?w=800&q=80',
      rating: 4.8,
      reviews: 2134,
      price: 5800,
      duration: '12 дней',
      difficulty: 'Сложная',
      liked: false,
      category: 'group'
    },
    {
      id: 6,
      name: 'Бали',
      country: 'Индонезия',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      rating: 4.6,
      reviews: 5892,
      price: 2900,
      duration: '8 дней',
      difficulty: 'Легкая',
      liked: true,
      category: 'new'
    },
    {
      id: 7,
      name: 'Новая Зеландия',
      country: 'Океания',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      rating: 4.9,
      reviews: 2741,
      price: 7200,
      duration: '14 дней',
      difficulty: 'Средняя',
      liked: false,
      category: 'group'
    },
    {
      id: 8,
      name: 'Исландия - Северное сияние',
      country: 'Исландия',
      image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80',
      rating: 5.0,
      reviews: 1567,
      price: 6800,
      duration: '7 дней',
      difficulty: 'Средняя',
      liked: true,
      category: 'new'
    }
  ];

  const filteredRecommendations = recommendations.filter(
    rec => rec.category === activeCategory
  );

  return (
    <div className="recommendations-page">
      <div className="recommendations-container">
        <header className="page-header">
          <h1 className="page-title">Рекомендации для вас</h1>
          <p className="page-subtitle">Лучшие направления, отобранные специально для вас</p>
        </header>

        {/* Categories */}
        <div className="categories-section">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon size={20} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Recommendations Grid */}
        <div className="recommendations-grid">
          {filteredRecommendations.map(rec => (
            <div key={rec.id} className="rec-card">
              <div className="rec-image">
                <img src={rec.image} alt={rec.name} />
                <div className="rec-overlay"></div>
                <button className="rec-like">
                  <Heart 
                    size={20} 
                    fill={rec.liked ? '#ff6b6b' : 'none'}
                    color={rec.liked ? '#ff6b6b' : '#fff'}
                  />
                </button>
                <div className="rec-difficulty">
                  <span>{rec.difficulty}</span>
                </div>
              </div>

              <div className="rec-content">
                <div className="rec-header">
                  <h3>{rec.name}</h3>
                  <div className="rec-location">
                    <MapPin size={14} />
                    <span>{rec.country}</span>
                  </div>
                </div>

                <div className="rec-rating">
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <span className="rating-value">{rec.rating}</span>
                  <span className="rating-count">({rec.reviews} отзывов)</span>
                </div>

                <div className="rec-details">
                  <div className="rec-price">
                    <span className="price-label">От</span>
                    <span className="price-value">${rec.price.toLocaleString()}</span>
                  </div>
                  <div className="rec-duration">
                    <Clock size={16} />
                    <span>{rec.duration}</span>
                  </div>
                </div>

                <button className="rec-button" onClick={() => onNavigate('journey')}>
                  <span>Подробнее</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;