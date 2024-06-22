import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Menu from './Pages/Menu.jsx'
import Header from './components/Header.jsx'
import FoodDetail from './components/FoodDetail.jsx';
import Footer from './components/Footer.jsx'
import AddedCards from './Pages/AddedCards.jsx';
import LoginForm from './Pages/LoginForm.jsx';
import ReservationForm from './Pages/ReservationForm.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/food/:id" element={<FoodDetail />} />
        <Route path='/cart' element={<AddedCards />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/reservations' element={<ReservationForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
