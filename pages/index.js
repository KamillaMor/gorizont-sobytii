import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div style={{ 
        padding: '2rem', 
        maxWidth: '1200px', 
        margin: '0 auto',
        color: '#2d3748' // Темный текст
      }}>
        <h2 style={{ color: '#1a365d', fontSize: '2rem' }}>Приглашаем в мир настоящей рыбалки!</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          marginTop: '2rem' 
        }}>
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e2e8f0', 
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1a365d', marginTop: 0, fontSize: '1.5rem' }}>🎣 Обучение рыбалке</h3>
            <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>Профессиональные техники ловли от опытного инструктора</p>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e2e8f0', 
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1a365d', marginTop: 0, fontSize: '1.5rem' }}>🚤 Управление катером</h3>
            <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>Научим управлять плавсредствами</p>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e2e8f0', 
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1a365d', marginTop: 0, fontSize: '1.5rem' }}>🏡 Уютный домик</h3>
            <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>Комфортное проживание в рыболовном раю</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}