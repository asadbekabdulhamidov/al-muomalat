import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './root';
import i18n from './i18/index.js'; // 👈 Faqat shart: `index.js` fayl nomda bo‘lishi kerak
import { I18nextProvider } from 'react-i18next';
createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <Root />
  </I18nextProvider>
);
