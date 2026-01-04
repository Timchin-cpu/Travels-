import React, { useState } from 'react';
import { Heart, MapPin, Star, Trash2, Share2, Calendar } from 'lucide-react';
import './Favorites.css';

function Favorites({ onNavigate }) {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Лофотенские острова',
      country: 'Норвегия',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80',
      rating: 4.9,
      price: 5200,
      savedDate: '15 дек 2025',
      category: 'природа'
    },
    {
      id: 2,
      name: 'Мачу-Пикчу',
      country: 'Перу',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
      rating: 4.8,
      price: 4800,
      savedDate: '10 дек 2025',
      category: 'история'
    },
    {
      id: 3,
      name: 'Санторини',
      country: 'Греция',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      rating: 4.9,
      price: 3200,
      savedDate: '8 дек 2025',
      category: 'пляж'
    },
    {
      id: 4,
      name: 'Патагония',
      country: 'Аргентина/Чили',
      image: 'https://images.unsplash.com/photo-1611160483099-29a56c5a9df1?w=800&q=80',
      rating: 4.8,
      price: 5800,
      savedDate: '5 дек 2025',
      category: 'приключения'
    },
    {
      id: 5,
      name: 'Бали',
      country: 'Индонезия',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      rating: 4.6,
      price: 2900,
      savedDate: '1 дек 2025',
      category: 'культура'
    },
    {
      id: 6,
      name: 'Новая Зеландия',
      country: 'Океания',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      rating: 4.9,
      price: 7200,
      savedDate: '28 ноя 2025',
      category: 'природа'
    }
  ]);

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все', count: favorites.length },
    { id: 'природа', name: 'Природа', count: favorites.filter(f => f.category === 'природа').length },
    { id: 'история', name: 'История', count: favorites.filter(f => f.category === 'история').length },
    { id: 'пляж', name: 'Пляжи', count: favorites.filter(f => f.category === 'пляж').length },
    { id: 'приключения', name: 'Приключения', count: favorites.filter(f => f.category === 'приключения').length },
    { id: 'культура', name: 'Культура', count: favorites.filter(f => f.category === 'культура').length }
  ];

  const filteredFavorites = activeCategory === 'all' 
    ? favorites 
    : favorites.filter(f => f.category === activeCategory);

  const handleRemove = (id) => {
    setFavorites(favorites.filter(f => f.id !== id));
  };

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <header className="favorites-header">
          <div className="header-content">
            <Heart size={48} fill="#ff6b6b" color="#ff6b6b" />
            <div>
              <h1 className="favorites-title">Избранное</h1>
              <p className="favorites-subtitle">Ваши любимые направления</p>
            </div>
          </div>
          <div className="favorites-count">
            <span className="count-number">{favorites.length}</span>
            <span className="count-label">направлений</span>
          </div>
        </header>

        {/* Categories */}
        <div className="favorites-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-chip ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
              <span className="category-count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Favorites Grid */}
        {filteredFavorites.length > 0 ? (
          <div className="favorites-grid">
            {filteredFavorites.map(fav => (
              <div key={fav.id} className="favorite-card">
                <div className="favorite-image" onClick={() => onNavigate('journey')}>
                  <img src={fav.image} alt={fav.name} />
                  <div className="favorite-overlay"></div>
                  <button className="favorite-heart">
                    <Heart size={20} fill="#ff6b6b" color="#ff6b6b" />
                  </button>
                </div>

                <div className="favorite-content">
                  <div className="favorite-header">
                    <div>
                      <h3>{fav.name}</h3>
                      <div className="favorite-location">
                        <MapPin size={14} />
                        <span>{fav.country}</span>
                      </div>
                    </div>
                    <div className="favorite-rating">
                      <Star size={16} fill="#FFD700" color="#FFD700" />
                      <span>{fav.rating}</span>
                    </div>
                  </div>

                  <div className="favorite-info">
                    <div className="favorite-price">
                      <span className="price-label">От</span>
                      <span className="price-value">${fav.price.toLocaleString()}</span>
                    </div>
                    <div className="favorite-saved">
                      <Calendar size={14} />
                      <span>{fav.savedDate}</span>
                    </div>
                  </div>

                  <div className="favorite-actions">
                    <button className="action-btn primary" onClick={() => onNavigate('journey')}>
                      Подробнее
                    </button>
                    <button className="action-btn secondary">
                      <Share2 size={18} />
                    </button>
                    <button 
                      className="action-btn danger"
                      onClick={() => handleRemove(fav.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Heart size={64} color="rgba(255, 255, 255, 0.3)" />
            <h3>Нет избранных в этой категории</h3>
            <p>Добавьте направления в избранное, чтобы не потерять их</p>
            <button className="explore-btn" onClick={() => onNavigate('recommendations')}>
              Исследовать направления
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;