export default function Header() {
  return (
    <header style={{
      backgroundColor: '#1a365d',
      color: 'white',
      padding: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>Горизонт событий</h1>
        <nav>
          <a href="/" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Главная</a>
          <a href="/about" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Обучение</a>
          <a href="/house" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Домик</a>
          <a href="/boat" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Катер</a>
          <a href="/contacts" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Контакты</a>
          <a href="/booking" style={{ 
            color: 'white', 
            margin: '0 1rem', 
            textDecoration: 'none',
            backgroundColor: '#e53e3e',
            padding: '0.5rem 1rem',
            borderRadius: '5px'
          }}>Записаться</a>
        </nav>
      </div>
    </header>
  );
}