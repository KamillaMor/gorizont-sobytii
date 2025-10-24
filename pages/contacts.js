import Layout from '../components/Layout';

export default function Contacts() {
  return (
    <Layout>
      <div style={{ 
        padding: '4rem 2rem', 
        maxWidth: '800px', 
        margin: '0 auto',
        textAlign: 'center',
        minHeight: '60vh'
      }}>
        <h1 style={{ color: '#1a365d', marginBottom: '2rem' }}>📞 Контакты</h1>
        <div style={{
          padding: '3rem',
          backgroundColor: '#f7fafc',
          borderRadius: '10px',
          border: '2px dashed #cbd5e0'
        }}>
          <h2 style={{ color: '#2d3748' }}>Страница в разработке</h2>
          <p style={{ color: '#4a5568', fontSize: '1.2rem', margin: '1rem 0' }}>
            Скоро здесь появятся наши контактные данные и карта проезда
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="/booking" style={{
              backgroundColor: '#e53e3e',
              color: 'white',
              padding: '1rem 2rem',
              textDecoration: 'none',
              borderRadius: '5px',
              display: 'inline-block',
              marginRight: '1rem'
            }}>
              Записаться на обучение
            </a>
            <a href="/" style={{
              backgroundColor: '#1a365d',
              color: 'white',
              padding: '1rem 2rem',
              textDecoration: 'none',
              borderRadius: '5px',
              display: 'inline-block'
            }}>
              На главную
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}