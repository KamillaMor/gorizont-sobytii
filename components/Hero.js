export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Горизонт событий</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Откройте для себя мир настоящей рыбалки</p>
      <a href="/booking" style={{
        backgroundColor: '#e53e3e',
        color: 'white',
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        textDecoration: 'none',
        borderRadius: '5px',
        display: 'inline-block'
      }}>
        Начать приключение
      </a>
    </section>
  );
}