import React from 'react';
import './index.css';
import App from './mondayDops/3_className_children/App';
import { createRoot } from 'react-dom/client';


const container  = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<App />);

