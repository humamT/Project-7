import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import Apropos from './pages/Apropos';
import Logement from './pages/Logement';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<Error />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;