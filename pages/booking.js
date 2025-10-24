import Layout from '../components/Layout';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  return (
    <Layout>
      <div style={{ 
        padding: '2rem', 
        maxWidth: '800px', 
        margin: '0 auto',
        minHeight: '80vh'
      }}>
        <h1 style={{ color: '#1a365d', textAlign: 'center', marginBottom: '1rem' }}>
          Запись на обучение
        </h1>
        <p style={{ 
          textAlign: 'center', 
          color: '#4a5568', 
          fontSize: '1.2rem',
          marginBottom: '3rem'
        }}>
          Оставьте заявку и мы свяжемся с вами для уточнения деталей
        </p>
        
        <BookingForm />
        
        <div style={{ 
          marginTop: '4rem', 
          padding: '2rem', 
          backgroundColor: '#f7fafc', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ color: '#1a365d', marginTop: 0 }}>📞 Альтернативные способы связи:</h3>
          <p>Если форма не работает, вы можете:</p>
          <ul style={{ color: '#4a5568', lineHeight: '1.8' }}>
            <li>📱 Позвонить нам напрямую: <strong>+7 (XXX) XXX-XX-XX</strong></li>
            <li>✉️ Написать на email: <strong>email.papy@gmail.com</strong></li>
            <li>📱 Написать в WhatsApp/Telegram</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}