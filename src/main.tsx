
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MainLayout from './layouts/MainLayout.tsx'


createRoot(document.getElementById('root')!).render(
  <MainLayout>
    
    <App />
  </MainLayout>
)
