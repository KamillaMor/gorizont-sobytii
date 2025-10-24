import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    program: 'fishing',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // 🔐 ЗАМЕНИ ЭТИ ДАННЫЕ НА СВОИ!
    const botToken = '8454182719:AAEjjT4myN3uK99b3NXcC716RPNg4q4wr1I'; // Токен от BotFather
    const chatId = '901574900'; // Твой chat ID

    const telegramMessage = `
🎣 *НОВАЯ ЗАЯВКА С САЙТА* 🎣

*Имя:* ${formData.name}
*Телефон:* ${formData.phone}
*Email:* ${formData.email || 'Не указан'}
*Программа:* ${getProgramName(formData.program)}
*Дата:* ${formData.date || 'Не указана'}
*Сообщение:* ${formData.message || 'Нет сообщения'}

_Отправлено: ${new Date().toLocaleString()}_
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        alert(`✅ Спасибо, ${formData.name}! Заявка отправлена! Мы свяжемся с вами в течение часа.`);
        // Очищаем форму после успешной отправки
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          program: 'fishing',
          message: ''
        });
      } else {
        alert('❌ Ошибка отправки. Пожалуйста, позвоните нам напрямую!');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('❌ Ошибка сети. Пожалуйста, попробуйте еще раз или позвоните нам!');
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для красивого названия программы
  const getProgramName = (program) => {
    const programs = {
      fishing: '🎣 Только рыбалка',
      fishing_boat: '🎣🚤 Рыбалка + катер', 
      full: '🎣🚤🏡 Полный пакет'
    };
    return programs[program] || program;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      padding: '2rem',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      backgroundColor: 'white',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2 style={{ color: '#1a365d', textAlign: 'center', marginBottom: '2rem' }}>
        Оставьте заявку на обучение
      </h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Имя:*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #cbd5e0',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
          placeholder="Ваше имя"
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Телефон:*</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #cbd5e0',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
          placeholder="+7 (XXX) XXX-XX-XX"
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #cbd5e0',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
          placeholder="your@email.com"
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Программа обучения:*</label>
        <select
          name="program"
          value={formData.program}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #cbd5e0',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        >
          <option value="fishing">🎣 Только рыбалка</option>
          <option value="fishing_boat">🎣🚤 Рыбалка + катер</option>
          <option value="full">🎣🚤🏡 Полный пакет</option>
        </select>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Желаемая дата:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #cbd5e0',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Дополнительное сообщение:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #cbd5e0',
            borderRadius: '4px',
            fontSize: '1rem',
            resize: 'vertical'
          }}
          placeholder="Ваши пожелания или вопросы..."
        />
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        style={{
          backgroundColor: isLoading ? '#a0aec0' : '#e53e3e',
          color: 'white',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1.1rem',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          width: '100%',
          fontWeight: 'bold'
        }}
      >
        {isLoading ? '📤 Отправляем...' : '🚀 Отправить заявку'}
      </button>
      
      <p style={{ 
        textAlign: 'center', 
        marginTop: '1rem', 
        color: '#718096',
        fontSize: '0.9rem'
      }}>
        Мы свяжемся с вами в течение часа
      </p>
    </form>
  );
}