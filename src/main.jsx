import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MobileDirectory from './components/WorkItems/MobileDirectory.jsx';
import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mobile-directory" element={<MobileDirectory />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
