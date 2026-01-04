import React, { useState } from "react";
import {
  Search,
  MapPin,
  Heart,
  Star,
  ArrowRight,
  User,
  Bell,
  Calendar,
  Home as HomeIcon,
  FileText,
  Link2,
} from "lucide-react";
import "./MainScreen.css";

function MainScreen({ onNavigate }) {
  const [activeCountry, setActiveCountry] = useState("switzerland");

  const destinations = [
    {
      id: 1,
      name: "Швейцария",
      slug: "switzerland",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
      price: "От $4,894",
      rating: "26.3K",
      date: "Пт, 26 янв",
      distance: "2.1 км",
      temperature: "36.1°",
    },
    {
      id: 2,
      name: "Турция",
      slug: "turkey",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
      price: "От $2,450",
      rating: "18.7K",
      date: "Сб, 27 янв",
      distance: "3.5 км",
      temperature: "28.4°",
    },
    {
      id: 3,
      name: "Япония",
      slug: "japan",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      price: "От $5,200",
      rating: "32.1K",
      date: "Вс, 28 янв",
      distance: "8.2 км",
      temperature: "22.5°",
    },
  ];

  const topRecommendations = [
    {
      id: 1,
      name: "Лофотенские острова",
      country: "Норвегия",
      image:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80",
      likes: 12500,
    },
    {
      id: 2,
      name: "Альпийские луга",
      country: "Швейцария",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      likes: 8900,
    },
  ];

  return (
    <div className="main-screen">
      <div className="main-container">
        {/* Header */}
        <header className="main-header">
          <div className="header-top">
            <div className="user-info">
              <div className="user-avatar">
                <img src="https://i.pravatar.cc/100?img=3" alt="User" />
              </div>
              <div className="user-details">
                <div className="user-rating">
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <span>4.5</span>
                </div>
                <div className="user-name">Иван Петров</div>
              </div>
            </div>
            <div className="header-actions">
              <div className="location-badge">
                <MapPin size={14} />
                <span>Москва, РФ</span>
              </div>
              <button className="icon-button">
                <Bell size={20} />
              </button>
            </div>
          </div>

          <h1 className="main-title">
            Природа без
            <br />
            границ контроля
          </h1>

          <div className="search-bar" onClick={() => onNavigate("search")}>
            <Search size={20} />
            <input type="text" placeholder="Поиск направлений..." readOnly />
          </div>
        </header>

        {/* Country Tabs */}
        <div className="country-tabs">
          {destinations.map((dest) => (
            <button
              key={dest.id}
              className={`country-tab ${
                activeCountry === dest.slug ? "active" : ""
              }`}
              onClick={() => setActiveCountry(dest.slug)}
            >
              <img src={dest.image} alt={dest.name} />
              <span>{dest.name}</span>
            </button>
          ))}
        </div>

        {/* Top Recommendations */}
        <section className="recommendations-section">
          <h2 className="section-title">Топ рекомендации</h2>

          <div className="recommendations-grid">
            {topRecommendations.map((rec) => (
              <div key={rec.id} className="recommendation-card">
                <div className="card-image">
                  <img src={rec.image} alt={rec.name} />
                  <button
                    className="like-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate("favorites");
                    }}
                  >
                    <Heart size={20} />
                  </button>
                  <div className="card-likes">
                    <Heart size={14} fill="#fff" color="#fff" />
                    <span>{(rec.likes / 1000).toFixed(1)}K</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{rec.name}</h3>
                  <p className="card-price">
                    {destinations.find((d) => d.name === "Швейцария")?.price}
                  </p>
                </div>
                <button className="card-arrow">
                  <ArrowRight size={20} />
                </button>
              </div>
            ))}

            <div className="info-card">
              <div className="info-date">
                <div className="info-icon">
                  <Calendar size={24} color="#a8edea" />
                </div>
                <span>Пт, 26 янв</span>
              </div>
              <div className="info-stats">
                <div className="info-stat">
                  <span className="stat-label">Расстояние</span>
                  <span className="stat-value">2.1 км</span>
                </div>
                <div className="info-stat">
                  <span className="stat-label">Солнечно</span>
                  <span className="stat-value">36.1°</span>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                alt="Mountains"
              />
            </div>
          </div>
        </section>

        {/* Featured Destination */}
        <section className="featured-section">
          <div className="featured-card" onClick={() => onNavigate("journey")}>
            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80"
                alt="Lofoten Islands"
              />
            </div>
            <div className="featured-content">
              <h3>Лофотенские острова</h3>
              <p>Норвегия</p>
            </div>
            <button className="featured-arrow">
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="feature-images">
            <div className="feature-img">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                alt="Nature"
              />
            </div>
            <div className="feature-img">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80"
                alt="Forest"
              />
            </div>
          </div>
        </section>

        {/* Bottom Navigation
        <nav className="bottom-nav">
          <button className="nav-item active">
            <div className="nav-icon home-icon">
              <HomeIcon size={20} />
            </div>
            <span>Главная</span>
          </button>
          <button className="nav-item">
            <div className="nav-icon">
              <FileText size={20} />
            </div>
            <span>Планы</span>
          </button>
          <button className="nav-item">
            <div className="nav-icon">
              <Link2 size={20} />
            </div>
            <span>Связь</span>
          </button>
        </nav> */}
      </div>
    </div>
  );
}

export default MainScreen;
