import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      color: '#2d3748', // Темно-серый вместо синего
      lineHeight: '1.6',
      backgroundColor: '#f7fafc' // Светлый фон для всего сайта
    }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}