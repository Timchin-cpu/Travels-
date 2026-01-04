import React, { useState } from 'react';
import { 
  User, Mail, Lock, Bell, Globe, Moon, Sun, 
  Shield, CreditCard, HelpCircle, LogOut, ChevronRight
} from 'lucide-react';
import './Settings.css';

function Settings({ onNavigate }) {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false
  });

  const settingsSections = [
    {
      title: 'Аккаунт',
      items: [
        { icon: User, label: 'Профиль', description: 'Управление личной информацией', action: () => onNavigate('profile') },
        { icon: Mail, label: 'Email', description: 'ivan.petrov@example.com', action: null },
        { icon: Lock, label: 'Пароль', description: 'Изменить пароль', action: null }
      ]
    },
    {
      title: 'Предпочтения',
      items: [
        { 
          icon: darkMode ? Moon : Sun, 
          label: 'Темная тема', 
          description: 'Настройка внешнего вида',
          toggle: true,
          value: darkMode,
          onChange: setDarkMode
        },
        { icon: Globe, label: 'Язык', description: 'Русский', action: null },
        { icon: Bell, label: 'Уведомления', description: 'Настройка оповещений', action: null }
      ]
    },
    {
      title: 'Безопасность',
      items: [
        { icon: Shield, label: 'Приватность', description: 'Управление данными', action: null },
        { icon: Lock, label: 'Двухфакторная аутентификация', description: 'Включена', action: null }
      ]
    },
    {
      title: 'Оплата',
      items: [
        { icon: CreditCard, label: 'Способы оплаты', description: '2 карты добавлено', action: null },
        { icon: CreditCard, label: 'История платежей', description: 'Просмотр транзакций', action: null }
      ]
    }
  ];

  const quickActions = [
    { icon: HelpCircle, label: 'Помощь и поддержка', color: '#a8edea' },
    { icon: LogOut, label: 'Выйти из аккаунта', color: '#ff6b6b' }
  ];

  return (
    <div className="settings-page">
      <div className="settings-container">
        <header className="settings-header">
          <h1 className="settings-title">Настройки</h1>
          <p className="settings-subtitle">Управление вашим аккаунтом и предпочтениями</p>
        </header>

        {/* User Info Card */}
        <div className="user-info-card">
          <div className="user-avatar-large">
            <img src="https://i.pravatar.cc/200?img=3" alt="User" />
          </div>
          <div className="user-details-large">
            <h2>Иван Петров</h2>
            <p>@ivan_travels</p>
            <button className="edit-profile-btn" onClick={() => onNavigate('profile')}>
              Просмотреть профиль
            </button>
          </div>
        </div>

        {/* Notifications Toggle */}
        <div className="notifications-card">
          <div className="notifications-header">
            <Bell size={24} color="#a8edea" />
            <div>
              <h3>Уведомления</h3>
              <p>Выберите способы получения оповещений</p>
            </div>
          </div>
          <div className="notifications-toggles">
            <div className="notification-item">
              <span>Email уведомления</span>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notifications.email}
                  onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="notification-item">
              <span>Push уведомления</span>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notifications.push}
                  onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="notification-item">
              <span>SMS уведомления</span>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notifications.sms}
                  onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        {settingsSections.map((section, index) => (
          <div key={index} className="settings-section">
            <h3 className="section-title">{section.title}</h3>
            <div className="settings-list">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={itemIndex} 
                    className="settings-item"
                    onClick={item.action}
                    style={{ cursor: item.action ? 'pointer' : 'default' }}
                  >
                    <div className="settings-item-left">
                      <div className="settings-icon">
                        <Icon size={20} />
                      </div>
                      <div className="settings-info">
                        <span className="settings-label">{item.label}</span>
                        <span className="settings-description">{item.description}</span>
                      </div>
                    </div>
                    {item.toggle ? (
                      <label className="toggle-switch">
                        <input 
                          type="checkbox" 
                          checked={item.value}
                          onChange={(e) => item.onChange(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    ) : (
                      <ChevronRight size={20} color="rgba(255, 255, 255, 0.4)" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Quick Actions */}
        <div className="quick-actions">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button 
                key={index} 
                className="quick-action-btn"
                style={{ borderColor: `${action.color}40` }}
              >
                <Icon size={20} color={action.color} />
                <span style={{ color: action.color }}>{action.label}</span>
              </button>
            );
          })}
        </div>

        {/* App Info */}
        <div className="app-info">
          <p>Travels App v1.0.0</p>
          <p>© 2026 Travels. Все права защищены.</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;