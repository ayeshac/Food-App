import './App.css';
import logo from './FoodLogo.png';
import Header from './components/Header';
import Body from './components/Body';



function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default AppLayout;
