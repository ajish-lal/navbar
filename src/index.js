import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const mountElem = document.getElementById('root');
const root = createRoot(mountElem);

root.render(<App />);
