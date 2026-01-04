import React from 'react';
import { ArrowLeft, Bell, MoreVertical, MapPin, Users, Sun, Map, Home, Edit, Share2 } from 'lucide-react';
import './JourneyScreen.css';

function JourneyScreen({ onBack }) {
  const journey = {
    title: "Сегодняшнее путешествие",
    date: "Понедельник, 15 янв 26",
    location: "Пляж Келингкинг",
    region: "Нуса Пеннида, Бали, Индонезия",
    status: "В процессе",
    activities: "8 Активностей",
    weather: "Солнечно",
    temperature: "36,1°C",
    time: "4am-3pm",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
  };

  const companions = [
    { id: 1, avatar: "https://i.pravatar.cc/100?img=1" },
    { id: 2, avatar: "https://i.pravatar.cc/100?img=5" },
    { id: 3, avatar: "https://i.pravatar.cc/100?img=8" },
    { id: 4, avatar: "https://i.pravatar.cc/100?img=12" }
  ];

  const nextDestinations = [
    {
      id: 1,
      name: "Нан Мадол",
      country: "Микронезия",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      location: "Сурабая, Бали, Индонезия"
    },
    {
      id: 2,
      name: "Бали Райс",
      country: "Индонезия", 
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
      location: "Убуд, Бали"
    }
  ];

  return (
    <div className="journey-screen">
      <div className="journey-container">
        {/* Header */}
        <header className="journey-header">
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="header-info">
            <div className="header-date">{journey.date}</div>
            <h1 className="header-title">{journey.title}</h1>
          </div>
          <div className="header-actions">
            <button className="icon-btn">
              <Bell size={22} />
            </button>
            <button className="icon-btn">
              <MoreVertical size={22} />
            </button>
          </div>
        </header>

        {/* Main Card */}
        <div className="main-journey-card">
          <div className="card-image-wrapper">
            <img src={journey.image} alt={journey.location} />
            <div className="image-overlay"></div>
            
            <div className="card-status">
              <span className="status-badge">{journey.status}</span>
              <button className="status-check">
                ✓
              </button>
            </div>

            <div className="companions-list">
              {companions.map((companion, index) => (
                <div 
                  key={companion.id} 
                  className="companion-avatar"
                  style={{ zIndex: companions.length - index }}
                >
                  <img src={companion.avatar} alt="Companion" />
                </div>
              ))}
            </div>
          </div>

          <div className="card-details">
            <div className="location-info">
              <h2>{journey.location}</h2>
              <div className="location-meta">
                <MapPin size={16} />
                <span>{journey.region}</span>
              </div>
            </div>

            <div className="journey-stats">
              <div className="stat-item">
                <MapPin size={20} className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-label">{journey.region.split(',')[0]}</div>
                  <div className="stat-value">{journey.region.split(',').slice(1).join(',')}</div>
                </div>
              </div>

              <div className="stat-item">
                <Users size={20} className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-value">{journey.activities}</div>
                  <div className="stat-label">{journey.time}</div>
                </div>
              </div>

              <div className="stat-item">
                <Sun size={20} className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-label">{journey.weather}</div>
                  <div className="stat-value">{journey.temperature}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Destinations */}
        <section className="next-destinations">
          <h3 className="section-header">Следующие направления</h3>
          
          <div className="destinations-grid">
            {nextDestinations.map(dest => (
              <div key={dest.id} className="destination-card">
                <div className="dest-image">
                  <img src={dest.image} alt={dest.name} />
                  <div className="dest-overlay">
                    <button className="dest-status">{journey.status}</button>
                  </div>
                </div>
                <div className="dest-info">
                  <h4>{dest.name}</h4>
                  <div className="dest-location">
                    <MapPin size={14} />
                    <span>{dest.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-btn secondary">
            <Home size={20} />
          </button>
          <button className="action-btn secondary">
            <Edit size={20} />
          </button>
          <button className="action-btn primary">
            <Map size={20} />
            <span>Маршрут</span>
          </button>
          <button className="action-btn secondary">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JourneyScreen;
