// import './App.scss';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
// import Error from './pages/Error';
// import Apropos from './pages/Apropos';
// import Logement from './pages/Logement';
// import Layout from './components/Layout/Layout';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />} >
//           <Route path="/" element={<Home />} />
//           <Route path="/404" element={<Error />} />
//           <Route path="/a-propos" element={<Apropos />} />
//           <Route path="/logement/:id" element={<Logement />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.scss';
// 1. Change BrowserRouter to HashRouter
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import Apropos from './pages/Apropos';
import Logement from './pages/Logement';
import Layout from './components/Layout/Layout';

function App() {
  return (
    // 2. Change BrowserRouter to HashRouter
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* Using 'index' is a slightly cleaner way to define the root-level route */}
          <Route index element={<Home />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          
          {/* 3. Change "/404" to "*" to catch all non-matching routes */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;