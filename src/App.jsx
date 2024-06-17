import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Menu from './Pages/Menu.jsx'
import Header from './components/Header.jsx'
import FoodDetail from './components/FoodDetail.jsx';
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/food/:id" element={<FoodDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
