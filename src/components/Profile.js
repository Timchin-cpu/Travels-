import React from 'react';
import { 
  MapPin, Star, Award, Compass, Camera, Heart, 
  Settings as SettingsIcon, Edit, Share2, Medal, TrendingUp
} from 'lucide-react';
import './Profile.css';

function Profile({ onNavigate }) {
  const user = {
    name: 'Иван Петров',
    username: '@ivan_travels',
    avatar: 'https://i.pravatar.cc/200?img=3',
    location: 'Москва, Россия',
    rating: 4.5,
    level: 'Исследователь',
    bio: 'Путешествую по миру уже 5 лет. Люблю горы, океан и знакомства с новыми культурами. Фотография - мое хобби.',
    stats: {
      trips: 47,
      countries: 23,
      photos: 892,
      followers: 2847
    }
  };

  const achievements = [
    { id: 1, icon: Medal, title: '50+ Путешествий', color: '#FFD700' },
    { id: 2, icon: Compass, title: 'Исследователь', color: '#a8edea' },
    { id: 3, icon: Camera, title: 'Фотограф', color: '#fed6e3' },
    { id: 4, icon: TrendingUp, title: 'Топ рейтинг', color: '#4CAF50' }
  ];

  const recentTrips = [
    {
      id: 1,
      destination: 'Бали, Индонезия',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
      date: 'Январь 2026',
      rating: 5
    },
    {
      id: 2,
      destination: 'Исландия',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80',
      date: 'Декабрь 2025',
      rating: 4.8
    },
    {
      id: 3,
      destination: 'Норвегия',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=600&q=80',
      date: 'Ноябрь 2025',
      rating: 4.9
    }
  ];

  const savedDestinations = [
    {
      id: 1,
      name: 'Мачу-Пикчу',
      country: 'Перу',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&q=80'
    },
    {
      id: 2,
      name: 'Санторини',
      country: 'Греция',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&q=80'
    },
    {
      id: 3,
      name: 'Патагония',
      country: 'Чили',
      image: 'https://images.unsplash.com/photo-1611160483099-29a56c5a9df1?w=400&q=80'
    },
    {
      id: 4,
      name: 'Новая Зеландия',
      country: 'Океания',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80'
    }
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-cover">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" 
              alt="Cover" 
            />
            <div className="cover-overlay"></div>
          </div>

          <div className="profile-main">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                <img src={user.avatar} alt={user.name} />
                <button className="avatar-edit">
                  <Camera size={18} />
                </button>
              </div>

              <div className="profile-info">
                <h1 className="profile-name">{user.name}</h1>
                <p className="profile-username">{user.username}</p>
                <div className="profile-location">
                  <MapPin size={16} />
                  <span>{user.location}</span>
                </div>
              </div>
            </div>

            <div className="profile-actions">
              <button className="profile-btn secondary" onClick={() => onNavigate('settings')}>
                <SettingsIcon size={20} />
                <span>Настройки</span>
              </button>
              <button className="profile-btn primary">
                <Edit size={20} />
                <span>Редактировать</span>
              </button>
              <button className="profile-btn secondary">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <div className="profile-level">
            <Award size={24} color="#FFD700" />
            <div className="level-info">
              <span className="level-label">Уровень</span>
              <span className="level-value">{user.level}</span>
            </div>
            <div className="level-rating">
              <Star size={20} fill="#FFD700" color="#FFD700" />
              <span>{user.rating}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="profile-bio">
          <p>{user.bio}</p>
        </div>

        {/* Stats */}
        <div className="profile-stats">
          <div className="stat-item">
            <Compass className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">{user.stats.trips}</span>
              <span className="stat-label">Путешествий</span>
            </div>
          </div>
          <div className="stat-item">
            <MapPin className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">{user.stats.countries}</span>
              <span className="stat-label">Стран</span>
            </div>
          </div>
          <div className="stat-item">
            <Camera className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">{user.stats.photos}</span>
              <span className="stat-label">Фотографий</span>
            </div>
          </div>
          <div className="stat-item">
            <Heart className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">{user.stats.followers}</span>
              <span className="stat-label">Подписчиков</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <section className="profile-section">
          <h2 className="section-title">Достижения</h2>
          <div className="achievements-grid">
            {achievements.map(achievement => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.id} className="achievement-card">
                  <div className="achievement-icon" style={{ color: achievement.color }}>
                    <Icon size={32} />
                  </div>
                  <span className="achievement-title">{achievement.title}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Trips */}
        <section className="profile-section">
          <h2 className="section-title">Последние путешествия</h2>
          <div className="trips-grid">
            {recentTrips.map(trip => (
              <div key={trip.id} className="trip-card" onClick={() => onNavigate('journey')}>
                <div className="trip-image">
                  <img src={trip.image} alt={trip.destination} />
                  <div className="trip-overlay"></div>
                  <div className="trip-rating">
                    <Star size={16} fill="#FFD700" color="#FFD700" />
                    <span>{trip.rating}</span>
                  </div>
                </div>
                <div className="trip-info">
                  <h3>{trip.destination}</h3>
                  <p>{trip.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Saved Destinations */}
        <section className="profile-section">
          <h2 className="section-title">Хочу посетить</h2>
          <div className="saved-grid">
            {savedDestinations.map(dest => (
              <div key={dest.id} className="saved-card" onClick={() => onNavigate('recommendations')}>
                <img src={dest.image} alt={dest.name} />
                <div className="saved-overlay"></div>
                <div className="saved-info">
                  <h4>{dest.name}</h4>
                  <p>{dest.country}</p>
                </div>
                <button className="saved-heart">
                  <Heart size={18} fill="#ff6b6b" color="#ff6b6b" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;