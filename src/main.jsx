import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import SnackShack from './components/WorkItems/SnackShack.jsx';
import MobileDirectory from './components/WorkItems/MobileDirectory.jsx';
import ClientDirectories from './components/WorkItems/ClientDirectories.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/snack-shack" element={<SnackShack />} />
      <Route path="/mobile-directory" element={<MobileDirectory />} />
      <Route path="/client-directories" element={<ClientDirectories />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
)
