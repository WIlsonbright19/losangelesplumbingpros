import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/dm-serif-display/400-italic.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
