import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, Calendar, Users, DollarSign, Filter, X } from 'lucide-react';
import './Search.css';

function Search({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: 'all',
    duration: 'all',
    difficulty: 'all',
    season: 'all'
  });

  const searchResults = [
    {
      id: 1,
      name: 'Швейцарские Альпы',
      country: 'Швейцария',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
      price: 4894,
      duration: '7 дней',
      rating: 4.8,
      travelers: 234
    },
    {
      id: 2,
      name: 'Каппадокия',
      country: 'Турция',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
      price: 2450,
      duration: '5 дней',
      rating: 4.7,
      travelers: 189
    },
    {
      id: 3,
      name: 'Киото',
      country: 'Япония',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
      price: 5200,
      duration: '6 дней',
      rating: 4.9,
      travelers: 312
    },
    {
      id: 4,
      name: 'Фьорды Норвегии',
      country: 'Норвегия',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80',
      price: 5600,
      duration: '8 дней',
      rating: 4.8,
      travelers: 156
    },
    {
      id: 5,
      name: 'Мальдивы',
      country: 'Мальдивы',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      price: 6800,
      duration: '7 дней',
      rating: 5.0,
      travelers: 421
    },
    {
      id: 6,
      name: 'Тоскана',
      country: 'Италия',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
      price: 3200,
      duration: '6 дней',
      rating: 4.7,
      travelers: 278
    }
  ];

  const popularSearches = [
    'Исландия', 'Бали', 'Норвегия', 'Швейцария', 
    'Греция', 'Перу', 'Новая Зеландия', 'Мальдивы'
  ];

  return (
    <div className="search-page">
      <div className="search-container">
        {/* Search Header */}
        <div className="search-header">
          <h1 className="search-title">Найдите идеальное путешествие</h1>
          
          <div className="search-input-wrapper">
            <div className="search-input-box">
              <SearchIcon size={24} />
              <input
                type="text"
                placeholder="Куда вы хотите отправиться?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="clear-btn"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={20} />
                </button>
              )}
            </div>
            
            <button 
              className="filter-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} />
              <span>Фильтры</span>
            </button>
          </div>

          {/* Popular Searches */}
          <div className="popular-searches">
            <span className="popular-label">Популярные:</span>
            <div className="popular-tags">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="popular-tag"
                  onClick={() => setSearchQuery(search)}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="filters-panel">
            <div className="filter-group">
              <label>Бюджет</label>
              <select 
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              >
                <option value="all">Любой</option>
                <option value="budget">До $3,000</option>
                <option value="mid">$3,000 - $5,000</option>
                <option value="luxury">От $5,000</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Длительность</label>
              <select
                value={filters.duration}
                onChange={(e) => setFilters({...filters, duration: e.target.value})}
              >
                <option value="all">Любая</option>
                <option value="short">До 5 дней</option>
                <option value="medium">6-10 дней</option>
                <option value="long">Более 10 дней</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Сложность</label>
              <select
                value={filters.difficulty}
                onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
              >
                <option value="all">Любая</option>
                <option value="easy">Легкая</option>
                <option value="medium">Средняя</option>
                <option value="hard">Сложная</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Сезон</label>
              <select
                value={filters.season}
                onChange={(e) => setFilters({...filters, season: e.target.value})}
              >
                <option value="all">Любой</option>
                <option value="spring">Весна</option>
                <option value="summer">Лето</option>
                <option value="autumn">Осень</option>
                <option value="winter">Зима</option>
              </select>
            </div>

            <button className="apply-filters-btn">
              Применить фильтры
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="results-info">
          <p>Найдено <strong>{searchResults.length}</strong> направлений</p>
        </div>

        {/* Search Results */}
        <div className="search-results">
          {searchResults.map(result => (
            <div 
              key={result.id} 
              className="search-result-card"
              onClick={() => onNavigate('journey')}
            >
              <div className="result-image">
                <img src={result.image} alt={result.name} />
                <div className="result-overlay"></div>
              </div>

              <div className="result-content">
                <div className="result-header">
                  <h3>{result.name}</h3>
                  <div className="result-location">
                    <MapPin size={14} />
                    <span>{result.country}</span>
                  </div>
                </div>

                <div className="result-details">
                  <div className="result-detail">
                    <DollarSign size={16} />
                    <span>От ${result.price.toLocaleString()}</span>
                  </div>
                  <div className="result-detail">
                    <Calendar size={16} />
                    <span>{result.duration}</span>
                  </div>
                  <div className="result-detail">
                    <Users size={16} />
                    <span>{result.travelers} путешественников</span>
                  </div>
                </div>

                <div className="result-footer">
                  <div className="result-rating">
                    ⭐ {result.rating}
                  </div>
                  <button className="result-btn">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;